---
title: "Confusing Concepts of Concurrency"
date: "2018-07-30"
subtitle: "Markdown is intended to be as easy-to-read and easy-to-write as is feasible."
link: "en-introduction-to-concurrency"
category: "iOS"
lang: 'en'
published: true
summary: "Concurrency is a big, useful, but confusing topic. How should we understand concurrency? What is async? What is multithreading? Where do threads come from? This article aims to answer these questions.  "
---
As developers, we all know that concurrency and parallelism matters. Without concurrency, expensive operations would block the user interface, and be detrimental to the overall user experience. But often times, questions are raised: 

>What's the difference between asynchronous and multithreading? 
>What exactly are threads?
>Are the number of threads limited by the number of cores?
> Concurrency v.s. Parallelism?

This article elaborates on these points, and seeks to clarify some common misunderstandings.

### 0. TL;DR
* As long as there are **multiple things happening at the same time**, we would call it "concurrency".
* **Asynchronous execution** and **multithreading** are 2 forms of concurrency.
* **Asynchronous execution** takes advantage of the fact that the computer can perform computational work while it is waiting for completions not on its part. 
* **Asynchronous execution** does not need more than 1 thread, so it is not parallelism.
* **MultiThreading** is in fact doing work in parallel, so it is parallelism.
* **Threads** are in fact sequences of executable operations. They are owned by **processes**
* Operating Systems distribute computational resources to threads through **context switching**, so fast and frequent that to user's eyes, a great number of tasks are performed at the same time.

### 1. What is Concurrency?

We start with what the word **"concurrent"**:
> **Concurrent:** having multiple things occur at the same time.

Note that by this definition, we don't actually care *how* things occur simultaneously. The mere fact that there are multiple things happening at the same time makes a process qualify as being "concurrent". 

We will soon come back to "how things are done at the same time". But for now, just keep in mind that as long as there *are* multiple things happening at the same time, we would call the situation as "concurrent".

In contrast, the word **"consecutive"** is are already familiar with, both in terms of definition and implementation:
> **Consecutive:** having things occur one after another.

In terms of implementation, this form of execution is called "synchronous execution".

### 2. What are the forms of concurrency?

#### A. Synchronous execution (is not concurrency)
The hallmark of **synchronous** execution is that different operations have absolutely no overlap between their execution timespans. No operation ends after another operation starts, as illustrated below: 

![](media/15349647751963/15350287282567.jpg)

No matter how long operation 1 takes, operation 2 will always start only after operation 1 finishes. 

> **The Story of a Server on Mars**
> Let's say we have a server on Mars. As a client on the earth, I want to update 2 records on the server: record $a$ and record $b$ with:
> ```swift
> a = a + 1 //takes about 8 minutes
> makeSentSound() //takes about 10 seconds
> b = b - 1 //takes about 8 minutes
> makeSentSound() //takes about 10 seconds
> ```

With synchronous operation, *line 2* would execute only after *line 1* has finished executing, which is 8 minutes later; then *line 4* would also have to wait 8 minutes for *line 3* to finish executing. It's simple... but how ridiculous!

#### B. Asynchronous execution (is concurrency but not parallelism)

Obviously, the simplest optimization one could think of is firing ```b = b - 1``` right after ```a = a + 1```. However, this means starting the execution of *line 3* **before** the finish of *line 1* -- this is the core idea behind **asynchronous** execution, that one operation can start before the completion of another:

![](media/15349647751963/15350305442941.jpg)


How can a computer do this? One may ask. 

If we look more closely, in the synchronous case of the "server on mars" story, the computer **is not doing anything** while it's waiting for the completion of ```a = a + 1```. It isn't responsible for the transmission of the signals in the universe, nor is it responsible for updating the record. (That's the server's job.) 

>So **asynchronous execution** takes advantage of the fact that the computer can *still* do other work while it is idling and waiting for completions not on its part. 

Therefore, as an obvious optimization to the above case: *line 2* can be executed while *line 1* is waiting for completion. *line 3* can start executing right after *line 2* completes, and *line 4* can execute while both *line 1* and *line 3* is waiting for completion.

Note that because different operations may occur simultaneously, asynchronous execution *is* considered a form of concurrency.

#### C. MultiThreading (is concurrency and parallelism)
The above-mentioned optimization is made possible by the fact the the computer is otherwise on idle during the 8-minutes time. What if it's not? What if it is indeed required to perform a lengthy operation? Would the optimization still be effective? 

> **Cooking and Serving a beef stew**, 
> involves seasoning the beef for 1 minutes (hands on), 
> letting the beef rest for 15 minutes (hands off),
> preparing vegetables for 10 minutes (hands on),
> boiling the water for 5 minutes (hands off),
> throwing everything inside (hands on),
> letting everything cook for 20 minutes (hands off),
> and setting up the table for 10 minutes (hands on).

A novice would do it synchronously, which takes $1 + 15 + 10 + 5 + 20 + 10 + 10 = 71$ minutes.
A seasoned cook would do it asynchronously, tucking all the hands-on time into the hands-off time. This would take $1 + 15 + 20 = 36$ minutes, a great optimization that is almost half of the original timespan.

However, if now the hands-off time becomes hands-on time: e.g. he needs to massage the meat when it rests, and he needs to stir the water and the soup all the time, then the asynchronous approach yields $1 + 15 + 10 + 5 + 20 + 10 + 10 = 71$ minutes, the same result as the synchronous approach. Since the cook must fully devote himself to every step, there is simply no space for optimization.

What he could do instead, is hire a **helper**. After all, massaging the meat or setting up the table does not require much expertise. In this way, while the helper is massaging the meat, the cook can go on to prepare the vegetables. This results in a completion time of $1 + 15 + 20 = 36$ minutes.

This is the idea of **multithreading**: having different workers (threads) work on different tasks simultaneously.

![](media/15349647751963/15350345845012.jpg)

### 3. Wait ... What?

#### A. Synchronous v.s. asynchronous, did we mess up?

Hold on, one may say, but doesn't "sync" means "together" and "async" means "separate"? Shouldn't the nomenclature be the other way round? 

No, we are not mistaken. In this case, "sync" means "one by one", and "async" means "at the same time". Why? Because we are not *syncing* operations with different operations, we art syncing different operations with the same **clock**. 
> If two operations share the same clock, they are mutually aware of **the occupation of time** by the execution of the other.
> 
> If two operations are not in sync with the same clock (hence async), they can execute on their own time, **without regard to the execution** time of the other.

#### B. What are threads? 

From a user's point of view, we first have to understand processes. **Processes** are softwares and services running on operating systems. What we call "app"s are in computer's term, processes. Services like the Location Service, and the App Push Notification Service are also processes. Desktop operating systems like Windows and MacOS supports multiple processes for the same application (like multiple windows of chrome), while iOS only supports one process per app, and processes are further distinguished to frontend processes and backend processes.

Now, **threads belong to processes**. Each process have at least 1 thread (the main thread). "Thread" is in fact a visualized term, the real way to understand it is that it's just a sequence of executable operations. That is, each process may have a number of sequences of operations

![](media/15349647751963/15350389548377.jpg)


The real significance of having different sequences of operations (threads) is in **context switching**. Modern operating systems are able to switch between threads. The switching happens so fast and frequently, that to the eye of users, it appears that the computer can do 1000 things at the same time, even though deep down it is only doing 3 or 4 at the same time.
> Nowadays, CPUs have more than 1 core. With hyperthreading technology, each core can raise its clock speed to pretend to the operating system that it is 2 or more cores. 
> These "fake core"s that the operating system is aware of are called physical threads / logical threads. They *are* the computing resources (we just mentioned) that the operating system distribute to software threads.
> Note that obviously, software threads are *very* different from physical cores.

#### C. So why does concurrency matter again?
From a frontend/mobile engineer's perspective, the thing we care the most is "60 fps frame rate" of the UI. Since all UI updates must be performed on the main thread, any block or wait it is unforgivable to the user experience. 

Understanding concurrency allows us to distribute expensive operations from the main thread to background threads as much as possible. This is why operations such as networking calls, file uploads and downloads, image decoding are always done on background threads. 

An even more interesting topic is having UI elements rendered on background threads. Frameworks like Texture (AsyncDisplayKit) have successfully done so and have thus gained much tractions from scrolling/rendering-intensive apps. 

In future posts, we will surely discuss more concurrency-related topics. I hope this post sets up a solid conceptual ground for further implementation details.
