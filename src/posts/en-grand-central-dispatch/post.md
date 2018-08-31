---
title: "Introduction to Grand Central Dispatch"
date: "2018-08-08"
subtitle: "Markdown is intended to be as easy-to-read and easy-to-write as is feasible."
link: "en-intro-to-grand-central-dispatch"
category: "iOS"
lang: 'en'
published: true
summary: "Apple want's you to develop the most powerful apps in the simplest syntax as possible. So how does Apple treat concurrency? This article takes a look at Grand Central Dispatch, the foundation of concurrency in Swift. "
---
Recall the difference between asynchronous operations and multithreading. Asynchronous operations takes advantage of the time where the main thread would otherwise be at idle. Multithreading is real parallelism where multiple threads are used to do computation.

In single threaded languages like JavaScript, we only have code that runs asynchronously. The result is very simple syntax, but not the most efficient in modern operating system's settings. 

In thread-based languages like Java, we do not write asynchronous code. Whenever we want to adopt concurrency, we would start operations on a thread other than the main thread. This is powerful, but the syntax is often very complicated.

This situation does not align with iOS's mandate: Apple want's you to develop the most powerful apps in the simplest syntax as possible. So how does Swift does it?

### Introducing GCD: The Complete Encapsulation

Introducing GCD, apple's solution to concurrency, and the complete encapsulation of asynchronous operations and multithreading. 

GCD want us to forget about operations and thread, and instead wants us to understand **tasks** and **dispatchQueues**

#### Tasks
Tasks are trivial to explain, as it is essentially the same as operations. **A task is a block of code to execute**. Oftentimes, it comes in the form of closures:
```swift
var myTask = {() -> Void in
  let data = Data(contentsOf: url!)
  let image = UIImage(data: data)
  cell.resetImageViewWith(image: image)
}
```
Although tasks are easy to understand, we need to remind ourselves that they are the things that we need concurrency for in the first place. Whichever thread we execute tasks on (multithreading), and whatever sequence we adopt to execute them (asynchronous), ultimately the goal is to execute the tasks as efficiently as possible.
#### DispatchQueues
DispatchQueues, or queues, like threads, are channels where tasks use computational resources. However, **dispatchQueues are wildly different from threads**, since dispatchQueues are encapsulations of threads, not threads equivalents.
* DispatchQueues can may use more than 1 software threads.
* The main queue $\neq$ the main thread.
    * Tasks in the main queue are guaranteed to always execute on the main thread. 
    * But other queues may also use the main thread for execution.
    * Tasks related to the UI is and should always execute on the main queue.

##### Serial Queue vs. Concurrent Queue
There are 2 types of dispatchQueues, serial queue and concurrent queue.

**Tasks inside a serial queue are guaranteed to executed in a synchronous manner**: Any later added tasks are executed until earlier tasks have finished. Note that there is no guarantee that the tasks execute on a single thread. They may be on different threads, but they execute one after another. 

By default there are 1 serial queues at our disposal: the main queue, which we can get by:

```swift
let main = DispatchQueue.main
```
If we want to instantiate a new serial queue of our own, we can write:
```swift
let customConcurrent = DispatchQueue(label: "your.desired.name")
```
Again, serial queues execute one task at a time in the order in which they are added to the queue. 

**Tasks in a concurrent queue may execute concurrently.** For example, before the finish of the first task, the second and the third task may already start on other threads. There is no guarantee of the finish and the start time. 

By default, there are 4 serial queues of different **quality of service** at our disposal: They are:
```swift
// highest priority
let backgroundHigh = DispatchQueue.global(qos: .userInteractive)
// mid priority
let backgroundMid = DispatchQueue.global(qos: .userInitiated)
// low priority
let backgroundLow = DispatchQueue.global(qos: .utility)
// least prioritized
let backgroundBack = DispatchQueue.global(qos: .background)
```
If you want to create a different concurrent queue. You can write:
```swift
let customQueue2 = DispatchQueue(label: "your.custom.name", attributes:.concurrent)
```
Yes, as you can see, a custom dispatchQueue is by default a serial queue. You have to explicitly declare `.concurrent` to initialize it as a concurrent queue. This is partially because tasks in custom concurrent queues will end up in one of the default concurrent queues. But this is abstracted away by GCD and happens under the hood.


### Using Grand Central Dispatch
#### Dispatch async v.s. dispatch sync
Now that we know how to find a queue or instantiate a queue, next step is to dispatch tasks onto different queues. 

There are two ways to dispatch a task to a queue:`dispatchQueue.async{}` and `dispatchQueue.sync{}`:
```swift
let serialQueue = DispatchQueue(label: "test")

// 1st: dispatch async:
serialQueue.async {
    // do something or task()
}

// 2nd: dispatch sync:
serialQueue.sync {
    // do something or task()
}
```
What is the difference? Let's look at the following example on the main queue:
```swift
let background = DispatchQueue.global(qos: .unspecified)
background.async {
     for i in 1...5 {
    print("Background Queue printing: \(i)")
  }
}
for i in 1...5 {
  print("Main Queue printing: \(i)")
}
```
The final result printed is:
```
Background Queue printing: 1
Main Queue printing: 1
Background Queue printing: 2
Background Queue printing: 3
Main Queue printing: 2
Main Queue printing: 3
Background Queue printing: 4
Main Queue printing: 4
Background Queue printing: 5
Main Queue printing: 5
```
Notice how it looks like the background printing tasks and the main thread printing tasks happen simultaneously. However, if we just change the `async` to `sync`, the result would look like:
```
Background Queue printing: 1
Background Queue printing: 2
Background Queue printing: 3
Background Queue printing: 4
Background Queue printing: 5
Main Queue printing: 1
Main Queue printing: 2
Main Queue printing: 3
Main Queue printing: 4
Main Queue printing: 5
```
The important takeaway is that `dispatchQueue.sync{}` blocks the queue of its context, while `dispatchQueue.async{}` does not. In our case, when we use `dispatchQueue.sync{}`, the main queue is blocked until the background queue is finished.
#### A Common Use Case
In everyday development, one very important use case of concurrency is when we want to download data from the internet, but we don't want the UI to be blocked. So this piece of code should be familiar:
```swift
// dispatch task to background queue
DispatchQueue.global().async {
  // do downloading
  if let data = try? Data(contentsOf: url!) {
    if let image = UIImage(data: data) {
      // dispatch back to main queue for ui
      DispatchQueue.main.async {
        cell.resetImageViewWith(image: image)
      }
    }
  }
}
```
Let's de-structure this code: 
* The 2nd line dispatches the task in its block to a global background concurrent queue.
* The 2nd line is on the main queue, and since we don't wish to block the main queue, we use `async`.
* Inside does downloading and decoding work.
* After downloading and decoding, we get the main thread and dispatch UI updating work there.
* Although it's trivial, blocking background downloading queue is not necessary, so we still use `async`.

The major takeaway here is that when we are in the context of a background queue, we can still find the main queue and dispatch work to the main queue from the background queue. This is the foundation of managing concurrency in Swift.

### Some Cautions
Although Grand Central Dispatch gives us an easier way to manage concurrency, it is still up to us to avoid some pitfalls of concurrency.

#### Deadlock
The first case is deadlock. It is very easy to create a deadlock if we use `dispatch.sync` at the wrong places.
> **Deadlock**
> When two queues block each other from proceeding.

If you are on the main queue, do not call `DispatchQueue.main.sync` inside any background queues that dispatch its work synchronously:
```swift
DispatchQueue.global(qos: .utility).sync {
  // Background Task
  DispatchQueue.main.sync {
    // App will crash
  }
}
```
Here, the 1st line has the global queue block the main queue from proceeding, and then `DispatchQueue.main.sync` blocks the global queue. This creates a deadlock situation.

#### Race Conditions
The second case is race conditions. We need to look out for it when we have 2 or more queues accessing the same resource and try to modify it.
> **Race Conditions**
> A queue reads a resource the same time another queue writes it. The first queue then makes modifications based on incorrect result it original reads.

Consider the following code, where we have two threads modifying the same resource repeatedly at the same time. The final result should be 0, but often turns out to be 3 or -5.
```swift
let background = DispatchQueue.global(qos: .userInitiated)
let race = DispatchQueue.global(qos: .userInteractive) 

for _ in 1...500 {
  background1.async {
    self.v = self.v + 1
    self.v = self.v + 1
  }
  background2.async {
    self.v = self.v - 1
    self.v = self.v - 1
  }
}
```