---
title: "A Practical Guide To Testing Localizations in iOS with XCTest"
date: "2024-11-12"
excerpt: "Learn how to automate localization testing in iOS using XCTest to ensure that every key is correctly translated and present in your localization files."
coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*W2rzDCpOXdSE0emYrMqrrg.png"
---

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*W2rzDCpOXdSE0emYrMqrrg.png)

Localization is essential step in ensuring that an app provides great user experience across different regions and languages. However, ensuring that every key is correctly translated and present in your localization files can be challenging task. In this guide, we will explore an approach to automate localization testing in iOS using XCTest.

## Introduction to Localization Testing

You should use localization for adapting your app to different languages and regions. To effectively deliver localized content, it's crucial to have a mechanism in place that ensures all the necessary strings are translated and properly included in the resource files.

Testing these localizations manually is time-consuming and error-prone. Automating the tests with XCTest allows you to verify that each localized string is present and correctly translated for all supported languages. By leveraging automation, you can achieve a more scalable, consistent, and reliable approach to verifying that your app is properly localized, making sure that nothing slips through the cracks.

Localization testing can save developers from embarrassing situations where users encounter untranslated strings, incorrect terminology or etc. It's a step toward making your app more inclusive and adaptable for users globally.

## The Challenge of Missing Localized Strings

One of the most common issues in localized apps is missing translation keys, which often lead to placeholder text appearing in the user interface. This issue usually happens when a new feature is added, and corresponding translations are missed. Missing keys can lead to broken UI elements, inconsistent experiences, and in some cases, user confusion.

To address this, we can write automated tests that check for the presence of these localized keys in all language bundles. Automated tests can quickly spot any missing or improperly referenced keys, which is a great time saver, especially as your app grows and new features are added. The key to reliable localization testing is making sure that each language is properly represented and validated, ensuring no user is left behind.

## Automating Localization Testing with XCTest

This method works particularly well for **string catalogs** and **legacy string files**, ensuring that all keys are properly localized in these formats. Using automated tests to verify localization files can help maintain the quality of your translations as the project scales. When dealing with multiple languages, it's easy to overlook adding a new translation to all the necessary language files, but automation helps mitigate that risk.

Below is a Swift extension for _XCTestCase_ that provides a method to assert the existence of all localized keys in the specified resource bundle and table. This helps to ensure that all localizations are complete and no translations are accidentally missing.

This is just a simplified version of my code and doesn't include all the helper methods.

```swift
extension XCTestCase {
    func assertLocalizedKeyAndValuesExist(
        in presentationBundle: Bundle,
        _ table: String,
        file: StaticString = #filePath,
        line: UInt = #line
    ) {
        let localizationBundles = getLocalizationBundles(in: presentationBundle, file: file, line: line)
        let localizedStringKeys = getLocalizedStringKeys(
            from: localizationBundles,
            table: table,
            file: file,
            line: line
        )
}
```

You should access the complete code at this link: [https://gist.github.com/mkemalgokce/72c0788d24e1055f46933f26d65c07df](https://gist.github.com/mkemalgokce/72c0788d24e1055f46933f26d65c07df)

## How the Code Works

• **assertLocalizedKeyAndValuesExist:** This primary function takes a bundle and table name as inputs to verify that all localized keys in the specified table are correctly translated. It gathers localization bundles, retrieves all localization keys, and checks each key against available translations. If a key is missing or untranslated, the function raises an _XCTFail_ to indicate a test failure, identifying the specific language and key needing attention.

**• getLocalizationBundles:** This helper function collects all localization bundles available within the specified resource bundle. It navigates through each language-specific "_.lproj" directory, creating a list of bundles representing every supported language.

**• getLocalizedStringKeys:** This function retrieves all keys from the localization files within each bundle. It loads the ".strings" file for each localization and gathers all keys, preparing them for verification against translations in each language.

**• checkLocalization:** This function checks if a given key has an appropriate translation in a specific language bundle. If the localized string for a key is identical to the key itself (indicating a missing or untranslated entry), it raises an _XCTFail_ with a message specifying the missing language and key.

The primary purpose of this extension is to automate the detection of missing keys in localization files, making sure all the keys are correctly mapped for each supported language. This level of automation ensures consistency and reliability across your entire app, making it easier to grow and maintain your localization efforts without fear of missing elements.

## Example Usage

It's important to note that this approach is specifically designed to work with string catalogs and legacy `.strings` files. By using this method, you can ensure that your older string files and catalogs are thoroughly tested for completeness and correctness. As your app evolves, keeping track of all translations can be challenging, but this automated approach can make sure nothing is left out.

To make things more interesting, let’s take a look at an example of how you can use this method in a test class. Imagine you have a set of strings used for presenting notes in your app. You can make sure these strings are properly translated across all supported languages like this:

```
final class NoteLocalizationTests: XCTestCase {
  func testLocalizedStringsHasKeysAndValuesForAllSupportedLocalizations() {
    let table = "Note"
    let bundle = Bundle(for: NotePresenter.self)
    assertLocalizedKeyAndValuesExist(in: bundle, table)
  }
}
```
![Example Test Result](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*uAVdbz2vY0HVCf3rVofMEQ.png)

## Conclusion

Testing localizations is an often-overlooked aspect of app development, but it is crucial for delivering a polished user experience. With the approach outlined above, you can ensure that every localization key has a corresponding value, thereby avoiding embarrassing errors such as missing translations or broken UI layouts. Proper localization makes your app more accessible, culturally relevant, and enjoyable for users worldwide.

By automating the testing of localization files, you will save time and effort while maintaining a high-quality, globalized application. Automated localization tests can be seamlessly integrated into your CI/CD pipelines, making sure every update or feature addition is tested for localization issues before reaching the end user.

Maintaining localization quality is an ongoing process, and automation plays a key role in keeping everything in check. By using the techniques presented in this guide, you can build a strong foundation for localization testing and continue expanding your app’s reach without compromising quality.

Thanks for reading! If you have any ideas, questions, or just want to discuss localization testing further, I’d be happy to hear from you.