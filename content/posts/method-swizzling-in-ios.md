---
title: "Method Swizzling in iOS: A Deep Dive into Runtime Magic"
date: "2024-12-29"
excerpt: "Learn how to use method swizzling in iOS to dynamically interchange method implementations at runtime, with practical examples and best practices."
coverImage: "https://img.freepik.com/free-photo/refresh-icon-reload-perforated-paper_53876-31072.jpg"
---

![Method Swizzling in iOS: A Deep Dive into Runtime Magic GPT](https://img.freepik.com/free-photo/refresh-icon-reload-perforated-paper_53876-31072.jpg)


**Method Swizzling** is the process of changing the implementation of an existing method at runtime. It allows developers to dynamically replace or extend the behavior of a method provided by the system or a class, without modifying the source code of the class itself.

This technique leverages the Objective-C runtime’s ability to dynamically associate new method implementations with selectors, which are essentially unique identifiers for methods.

**How Does Method Swizzling Work?**

1. **Objective-C Runtime:**

• Method swizzling relies on the Objective-C runtime, specifically the class_replaceMethod and method_exchangeImplementations functions.

• These functions enable the modification of a class’s method dispatch table at runtime.

2. **Replacing Implementations:**

• A method’s original implementation is swapped with a custom implementation, allowing new behavior to be injected when the method is called.

3. **Preserve Original Behavior:**

• The original implementation is typically preserved, so it can still be invoked from the new implementation if needed.

**Example: Swizzling viewDidLoad in UIViewController**

Below is an example of swizzling the viewDidLoad method to inject custom behavior into all view controllers:

**Objective:**
Add a log message whenever any view controller’s viewDidLoad is called.

**Code:**

```swift
import UIKit

extension UIViewController {
    static let swizzleViewDidLoad: Void = {
        let originalSelector = #selector(UIViewController.viewDidLoad)
        let swizzledSelector = #selector(UIViewController.swizzled_viewDidLoad)

        guard let originalMethod = class_getInstanceMethod(UIViewController.self, originalSelector),
        let swizzledMethod = class_getInstanceMethod(UIViewController.self, swizzledSelector) else { return }

        method_exchangeImplementations(originalMethod, swizzledMethod)

    }()

    @objc private func swizzled_viewDidLoad() {
        // Call the original implementation
        self.swizzled_viewDidLoad()
        // Add custom behavior
        print("\(self) viewDidLoad called")
    }

}
// Activate swizzling
extension AppDelegate {
    override open var next: UIResponder? {
        UIViewController.swizzleViewDidLoad
        return super.next
    }
}
```

**Key Points in the Example**

1. **method_exchangeImplementations:**

• Swaps the implementation of the original viewDidLoad with swizzled_viewDidLoad.

2. **Preserving Original Behavior:**

• The swizzled_viewDidLoad calls self.swizzled_viewDidLoad(), which actually points to the original viewDidLoad due to the swizzling.

3. **Activation:**

• The swizzling is activated early in the app lifecycle by overriding next in the AppDelegate.

**Conclusion**

Method swizzling is a powerful tool in iOS development that allows runtime modification of method behavior. While it provides great flexibility, it should be used cautiously and only when necessary, as it introduces complexity and potential risks. Always consider alternatives like subclassing or composition before resorting to swizzling.
