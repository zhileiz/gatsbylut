---
title: "Cutting Corners to Corner Radius"
date: "2018-08-05"
subtitle: "Markdown is intended to be as easy-to-read and easy-to-write as is feasible."
link: "en-cutting-corners-to-cornerradius"
category: "iOS"
lang: 'en'
published: true
summary: "Traditional way of adding cornerRadius to UI components risks sacrificing performance due to offscreen rendering. This article presents a more efficient way to draw cornerRadius. "
---
Very often, we want to add `cornerRadius` to a UI element, usually a `UIImage`. What we often do is we put our `UIImageView` onto the base `UIView` (`UICollectionViewCell`) or such, alter the `CALayer` of the base, and then let the `UIImageView` clip to the bounds. The result looks something like this:

```swift
self.layer.cornerRadius = 5
imageView.clipToBounds = true
```

Looks familiar and correct? Cool. But we need to realize that this set of operation may cause serious performance issues, and that there are better ways to achieve adding the cornerRadius.

### 1. What went wrong?
Why is `.cornerRadius` so expensive? In fact, this is not the `.cornerRadius` that is causing the issue, it is the `.clipToBounds = true` that is triggering what we call **offscreen rendering**.

Images need to clip to the bounds of the `CALayers` underneath, so for every frame, the GPU has to compute the rounded image that goes above the rounded corners. Even when the content isn't changing, the GPU has to switch contexts on every frame to do that computation.

### 2. Ways to improve

A convenient way to achieve a more efficient corner drawing is using bezier curve to regulate the `CAlayer` of the image itself, so that no `.clipsToBounds` is needed. 

We can add an extension to CALayer:

```swift
extension CALayer {
    func applyRoundCornerMaskWith(radius: CGFloat) {
        let path:UIBezierPath = UIBezierPath.init(roundedRect: self.bounds,
                                                  cornerRadius: radius)
        let layer = CAShapeLayer.init()
        layer.path = path.cgPath
        layer.frame = self.bounds
        self.mask = layer
    }
}
```
and then, we can call this method from:

```swift
imageView.layer.applyRoundCornerMaskWith(radius: 5)
```

#### Bonus
An additional benefit for doing this is that we can now control what corners to give a `cornerRadius` to, since `UIBezierPath` is quite flexible. We can add the following extension

```swift
func applyRoundCornerMaskWith(radius: CGFloat, corners: UIRectCorner) {
    let path:UIBezierPath = UIBezierPath.init(roundedRect: self.bounds,
                                              byRoundingCorners: corners,
                                      cornerRadii: CGSize(width: radius,
                                                                      height: radius))
    let layer = CAShapeLayer.init()
    layer.path = path.cgPath
    layer.frame = self.bounds
    self.mask = layer
}
```

Let's say we want the top right and the bottom left corners to be rounded. We can then call this method in this way:

```swift
imageView.layer.applyRoundCornerMaskWith(radius: 5, corners: [.topRight, .bottomLeft])
```

Great!

#### Caution
In situations where the base views are reused, for example, in UICollectionView's `dequeueReusableCells`, drawing a bezier curves for every cell every time is costly. Therefore, we need some mechanisms to cache these paths and layers. A simple way is to have a singleton manager and store them using a dictionary, with image being the image URLs. There are other means too. The bottom line is, it is a good idea to cache the paths and layers somewhere.