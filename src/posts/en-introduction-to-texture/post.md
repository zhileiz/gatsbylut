---
title: "A Gentle Introduction to Texture"
date: "2018-08-02"
subtitle: "Markdown is intended to be as easy-to-read and easy-to-write as is feasible."
link: "en-introduction-to-texture"
category: "iOS"
lang: 'en'
published: true
summary: "Texture (a.k.a AsyncDisplayKit) is an iOS framework for building smooth and responsive UI. Though mature, it is a little daunting to first-time users. This article aims to give a gentle introduction. "
---

Texture (a.k.a AsyncDisplayKit) is an iOS framework for smooth and responsive interfaces. It's main promise is making user interfaces thread safe. This means that the measuring and rendering of UI elements can now happen on background threads concurrently. The result: 
> a ridiculously fluid and performant 60fps UI with no lag or stutter, even with fast scrolling.

Although Texture is a mature framework in the industry, it is a little daunting to first-time users. It directly encapsulates UIKit, but it completely discards AutoLayout. It has a lot of its own rules (e.g. when is okay to access CALayer and when is not) which would make much more sense only after you have really understood the framework's logic. This article wishes to give a mild introduction to that logic and help beginner users wrap their heads around Texture's usage.

### 1. A little bit of history
Texture was formerly AsyncDisplayKit. It was the UI architectural framework empowering the *Paper* app of Facebook's. It was a game changer to the mobile engineering landscape, as *Paper* was one of the few apps that offers exceptionally smooth and fluid scrolling performance for feed.

The lead engineer at that time (2012-2014) was Scott Goodson. Before he joined Facebook, he was the #10 engineer on the iOS team at Apple, where he primarily worked on UIKit. Therefore, it is no surprise that he had formed a deep understanding of UIKit and its strength and weaknesses.

Later in 2014, Facebook open-sourced AsyncDisplayKit, and Scott remained to be the lead contributor to date. After he joined Pinterest in 2015, he and his fellow engineers contributed more than 70% of all the code in AsyncDisplayKit. In 2017, Pinterest decided to change the name to Texture, but still keep the project in the open source community. 

### 2. Not your typical UIKit

The first thing we need to get straight is that Texture is a direct and complete replacement of UIKit. Although it is still using UIKit under the hood, we as the framework's users never directly work with UIKit components. We work with Texture components called **nodes** instead, since every UIKit component has a counterpart in Texture:

<table class="tg">
  <tr>
    <th class="tg-0lax"></th>
    <th class="tg-xldj">UIKit</th>
    <th class="tg-xldj">Texture</th>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="12">Texture Nodes</td>
    <td class="tg-xldj">UIView</td>
    <td class="tg-xldj">ASDisplayNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">UIScrollView</td>
    <td class="tg-0lax">ASScrollNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">UITableViewCell</td>
    <td class="tg-0lax" rowspan="2">ASCellNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">UICollectionViewCell</td>
  </tr>
  <tr>
    <td class="tg-0lax">UILabel</td>
    <td class="tg-0lax">ASTextNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">UITextView</td>
    <td class="tg-0lax">ASEditableTextNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">UIImage</td>
    <td class="tg-0lax">ASImageNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">AVPlayerLayer</td>
    <td class="tg-0lax">ASVideoNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">UIMoviePlayer</td>
    <td class="tg-0lax">ASVideoPlayerNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">UIControl</td>
    <td class="tg-0lax">ASControlNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">MKMapView</td>
    <td class="tg-0lax">ASButtonNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">MKMapView</td>
    <td class="tg-0lax">ASMapNode</td>
  </tr>
  <tr>
    <td class="tg-baqh" rowspan="6">Texture Node Containers</td>
    <td class="tg-0lax">UITableView</td>
    <td class="tg-0lax">ASTableNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">UICollectionView</td>
    <td class="tg-0lax">ASCollectionNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">UIViewController</td>
    <td class="tg-0lax">ASViewController</td>
  </tr>
  <tr>
    <td class="tg-0lax">UIPageViewController</td>
    <td class="tg-0lax">ASPagerNode</td>
  </tr>
  <tr>
    <td class="tg-0lax">UINavigationController</td>
    <td class="tg-0lax">ASNavigationController</td>
  </tr>
  <tr>
    <td class="tg-0lax">UITabBarController</td>
    <td class="tg-0lax">ASTabBarController</td>
  </tr>
</table>

As Texture officially says:
> If you’re used to working with views, you already know how to use nodes. 

#### ASDisplayNode
All Texture UI components are descendants of `ASDisplayNode`, just like all UIKit UI components are descendants of `UIView`. `ASDisplayNode` wraps a `UIView` and a `CALayer`, so you can call `node.view` or `node.layer` when you really need to do so. 

All nodes' APIs are designed to be as similar as that of their UIKit counterparts. For example, just like you can do ```view.addSubview(subview)```, you do ```node.addSubnode(subnode)``` to add sub UI components. 

The main advantage of using nodes over UIKit components is that all nodes can preform measurement, render layout and display concurrently. 

> "But wait... isn't it that UIViews and CALayers properties can only be modified on the main thread?"

Yes... and no, so here comes the Texture-specific rules:

Subclassing `ASDisplayNode` is different from subclassing `UIView`. This is mainly because some lifecycle methods of nodes are called on background threads in Texture, while UIView's lifecycle methods are always called on the main thread:

<table class="tg">
  <tr>
    <th class="tg-xldj" colspan="2">UIKit</th>
    <th class="tg-xldj" colspan="2">Texture</th>
  </tr>
  <tr>
    <td class="tg-xldj">Method</td>
    <td class="tg-xldj">Thread</td>
    <td class="tg-xldj">Method</td>
    <td class="tg-0pky">Thread</td>
  </tr>
  <tr>
    <td class="tg-xldj" rowspan="2">init</td>
    <td class="tg-xldj" rowspan="4">main</td>
    <td class="tg-xldj">init</td>
    <td class="tg-0pky">background</td>
  </tr>
  <tr>
    <td class="tg-xldj">didLoad</td>
    <td class="tg-0pky">main</td>
  </tr>
  <tr>
    <td class="tg-xldj" rowspan="2">layoutSubviews</td>
    <td class="tg-xldj">layoutSpecThatFits</td>
    <td class="tg-0pky">background</td>
  </tr>
  <tr>
    <td class="tg-0lax">layout</td>
    <td class="tg-0lax">main</td>
  </tr>
</table>

The most important thing to remember about `-init` is that since it could be called on any queue, you should *never* initialize any UIKit objects, access `node.layer.X` or `node.view.X`, or add gesture recognizers inside. 

Instead, you should do these operations in `-didLayout`, since it runs on the main thread.

Arguably the most important method is `-layoutSpecThatFits`. **All layout code belongs to here** (we will talk about layout in a minute). The fact that this method runs on background threads make Texture shine. With this method, texture calculates and renders the method concurrently. 

However, you cannot modify layers and views in `-layoutSpecThatFits`. Instead, do them in `-layout`, which runs on the main thread, right after the layout has applied. This is a good place to put code like :

```swift
subnode.frame = self.bounds;
self.layer.cornerRadius = 4;
```
This is pretty much all you need to know to work with nodes.

#### Node Containers

Text node containers are also subclasses of ASDisplayNode. They also have APIs similar with that of their UIKit counterparts. 

Although it is possible to use nodes directly on UIKit components, there are 2 main reasons why we should always use node containers when working with Texture.

The first reason is that since nodes are loaded concurrently, if they start loading only after they have appeared on screen (as UIKit does), their contents may flash on screen.

The second reason is the advantage of **intelligent preloading**, which we will talk about next.

### 2. Intelligent Preloading

All ASDisplayNodes have a property called `interfaceState`. When a node (such as an `ASCellNode`) is put inside a node container (such as an `ASTableNode`), its `interfaceState` gets updated by the node container's `ASRangeController`.

There are 3 ranges of interface states:

| interface state | description|
| --- | --- |
|Preload|The furthest range out from being visible. This is where content is gathered from an external source, whether that’s some API or a local disk.|
|Display|Here, display tasks such as text rasterization and image decoding take place.|
|Visible|The node is onscreen by at least one pixel.|

This is most useful in UIs that involve scrolling. As is illustrated below:
![](media/15350850423369/15350999265535.jpg)

With these interface states, the app knows what content to preload and what components to pre-render. When the user scroll too fast, the app would also know what contents to quit working on, and move on to load content of higher priorities.

Developers can also customize the app's behavior at each change of interface state with Interface State Callbacks:

* Visible Range: 
    * `-didEnterVisibleState`
    * `-didExitVisibleState`
* Display Range
    * `-didEnterDisplayState`
    * `-didExitDisplayState`
* Preload Range
    * `-didEnterPreloadState`
    * `-didExitPreloadState`

A common practice in dealing with `ASCellNode`s with images is:
```swift
override func didExitDisplayState {
    super.didExitDisplayState()
    self.imageNode.cancelDownload()
}
```

### 3. The Layout API
For the sake of performance, Texture completely abandoned Auto Layout and uses its own layout engine.

#### Declarative over Imperative
In Auto Layout, we imperatively lay things out. 

```swift
self.view.addSubview(myView)
myView.translatesAutoresizingMaskIntoConstraints = false
// "add these constraints"
self.view.addConstraints([
    // "set my view's width"
    NSLayoutConstraint(item: myView, attribute: .width, relatedBy: .equal, toItem: nil, attribute: .width, multiplier: 1.0, constant: 64),
    // "set my view's height"
    NSLayoutConstraint(item: myView, attribute: .height, relatedBy: .equal, toItem: nil, attribute: .height, multiplier: 1.0, constant: 64),
    // "set my view's x"
    NSLayoutConstraint(item: myView, attribute: .centerX, relatedBy: .equal, toItem: self.view, attribute: .centerX, multiplier: 1.0, constant: 0),
    // "set my view's y"
    NSLayoutConstraint(item: myView, attribute: .centerY, relatedBy: .equal, toItem: self.view, attribute: .centerY, multiplier: 1.0, constant: 0)
])
```
Each line is equivalent to an immediate command that modifies the actual presentation on screen.

Texture's layout system adopts a **declarative** way of writing layout code. All layout code resides in 1 lifecycle method, and this method *only*: 
```swift
override func layoutSpecThatFits(constrainedSize: ASSizeRange) -> ASLayoutSpec {
    // layout code
    ...
    return layout // returns a layoutSpec
}
```
Notice that this method returns an `ASLayoutSpec`. It is this `ASLayoutSpec` that dictates the layout on screen. 

This means that along the way, we do not imperatively change anything. All we write inside this method serves as configuration to the `ASLayoutSpec` that gets returned. 

#### Understanding ASLayoutSpec
Layout system in Texture centers around 2 concepts:
* `ASLayoutSpec`: stands for layout specification
* `ASLayoutElement`: stands for layout element

`ASLayoutSpec` act as containers for `ASLayoutElement`s.
`ASLayoutElement` is a protocol that both `ASDisplayNode` and `ASLayoutSpecs` conform to.

**This means that you can compose layout specs from both nodes and other layout specs.**

To get a taste of what it means, let's try to write the layout for a ```ASCellNode``` that only contains a line of text with some edge insets.
```swift
override func layoutSpecThatFits(constrainedSize: ASSizeRange) -> ASLayoutSpec {

    let inset : UIEdgeInset = UIEdgeInset(top: 5, left: 5, bottom: 5, right: 5);
    // an ASDisplayNode becomes an ASLayoutSpec
    let layoutElement : ASLayoutSpec = ASInsetLayoutSpec.insetLayoutSpec(with: inset, child: myTextView)
    
    let secondInset : UIEdgeInset = UIEdgeInset(top: 2, left: 2, bottom: 2, right: 2);
    // an ASLayoutSpec becomes another ASLayoutSpec
    let layout: ASLayoutSpec = ASInsetLayoutSpec.insetLayoutSpec(with: secondInset, child: layoutElement)
    
    return layout
}
```
Simple, right? Here, we are using an ```ASInsetLayoutSpec``` which is a subclass of ```ASLayoutSpec```. We will discuss more of these specs, and how to configure them up next.

#### ASStackLayoutSpec and CSS Flexbox

Arguably the most important layout spec is ASStackLayout, which is heavily inspired by CSS Flexbox. We use ASStackLayoutSpec in any situations where UI components are positioned in vertical or horizontal arrays.
![](http://texturegroup.org/static/images/layout-examples-simple-header-with-left-right-justified-text-diagram.png)
The usage and API of ASStackLayout mimics that of CSS Flexbox. First we declare the direction of the stack:
```swift
let verticalLayout = ASStackLayout.verticalStackLayoutSpec()
let horizontalLayout = ASStackLayout.horizontalLayoutSpec()
```
Then we put UI components to include in the stack into the children of the layout spec:
```swift
verticalLayout.children = [nameLabel, locationLabel]
```
Next, like in CSS Flexbox, we define the `alignItem` property of the spec. You can tell the children to align at the start, center, end, or stretch across the axis:
```swift
verticalLayout.alignItem = ASStackLayoutAlignItemsStart
```
Finally, `justifyContent` property defines how we want to deal with the space between and around our UI components. `spaceAround` puts all the empty space at the front and end of the children; `spaceBetween` puts all the space between the children. You can also stack things in the `start`, `end` or `center` of the available space, and set the `spaceBetween` property of the stack layout spec to your desired value.
```swift
verticalLayout.alignItem = ASStackLayoutAlignItemCenter
verticalLayout.spaceBetween = 5
```
Moreover, you can set `ASLayoutElement.style.flexGrow` and `ASLayoutElement.style.flexShrink` and expect them to work the same way as in CSS Flexbox.
Through my learning process, I [this simple and fun tutorial](http://huytnguyen.me/froggy-asdk-layout/) to help me get better in using ASStackLayoutSpec.

#### Other Layout Specs
Understanding ASStackLayout is a great start to using Texture Layout.
There is [a great official tutorial](http://texturegroup.org/docs/automatic-layout-examples-2.html) by Texture on different Layout Specs. Be sure to Check it out.
Some extremely useful layout specs are `ASInsetLayoutSpec`, `ASOverlayLayoutSpec`, and `ASBackgroundLayoutSpec`.

