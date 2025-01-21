---
title: "Building Command-Line Tools in Swift: Part 2 — Publishing a CLI Application"
date: 2025-01-21
excerpt: "In this part, we'll explore how to take a more complex CLI application, such as AssetOrganizer, and prepare it for distribution and publishing, including adding GitHub Actions support for CI/CD workflows."
coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*faaxaK0ryXPSgobDEVMAZQ.jpeg"
---


![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*faaxaK0ryXPSgobDEVMAZQ.jpeg)

In the first part of this series, we covered the basics of building a CLI application in Swift using the Swift Package Manager. We learned about creating commands, handling arguments, and outputting results to the terminal. Now, in this part, we’ll explore how to take a more complex CLI application, such as **AssetOrganizer**, and prepare it for distribution and publishing, including adding GitHub Actions support for CI/CD workflows.

**Key Topics in This Part:**

1. **Refining the CLI App for Real-World Use**

2. **Publishing the Application**

Bonus. **Integrating GitHub Actions for CI/CD**

Asset Organizer
===============

A command-line tool for analyzing and managing unused assets in iOS/macOS projects. This tool helps you identify and clean up unused assets in your Xcode projects, reducing app size and maintaining a cleaner codebase.

Features
--------

*   🔍 Analyze asset usage in your project
*   📊 Generate detailed reports in multiple formats (Markdown, JSON, Console)
*   🎨 Support for various asset types:
*   Images (.png, .jpg, .jpeg, .gif, .pdf, .svg)
*   Colors (.colorset)
*   Data Sets (.dataset)
*   🗑 Clean up unused assets
*   💡 Smart asset detection and usage analysis
*   🛡 Safe deletion with confirmation prompts
*   📝 Detailed usage reporting showing where assets are used
*   🔄 Sort assets by name, size, or usage count
*   ⚡️ Fast and efficient file scanning
*   🎯 Filter assets by type or minimum size

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Xjgzmy7akg6gIijNc5S2Cw.png)

You should access repository on: [AssetOrganizer Github](https://github.com/mkemalgokce/AssetOrganizer)

Refining the CLI App for Real-World Use
=======================================

Adding Flexible Configuration
-----------------------------

Allow users to customize their analysis by adding support for flags:

```
$ asset-organizer analyze \
 project-path MyXcodeProject \
 report-format json \
 sort-by usage \
 min-size 500
```

Using [Swift Argument Parser]([https://github.com/apple/swift-argument-parser](https://github.com/apple/swift-argument-parser)) can simplify the implementation.

**Publishing the Application**
==============================

**GitHub Releases**
Tagging a release in your repository allows users to download and install your tool:

1.  Create a new tag for the release:

```
git tag -a v1.0.0 -m "Release 1.0.0"
git push origin v1.0.0
```

2. Draft a release in the GitHub “Releases” section.

Attach prebuilt binaries for macOS/Linux to simplify user installation.

Bonus: Integrating AssetOrganizer to your GitHub Actions Workflow
=================================================================

You can use **AssetOrganizer** as part of your CI workflows:

```
- name: AssetOrganizer
 uses: mkemalgokce/AssetOrganizer-action@1.0.0
 with:
 project-path: RookBook # Default is '.'
```

This generates results that appear directly in the GitHub Actions summary.

![Github actions summary](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*oQsTm6ZeCMgj6bgJvoiQPQ.png)

Wrapping Up
===========

In **Part 1**, we explored the fundamentals of building a CLI application in Swift. We learned how to create commands, handle arguments, and produce output, laying a solid foundation for any command-line tool. By mastering these basics, we established a workflow for quickly developing functional and user-friendly CLI tools.

In **Part 2**, we delved into publishing a CLI application and used **AssetOrganizer** as an example. We discussed refining the application for real-world usage, publishing it via GitHub Releases, and as a bonus, demonstrated how to integrate **AssetOrganizer** into a GitHub Actions workflow to automate its use within CI/CD pipelines.

By combining these techniques, you now have the knowledge to build, refine, and distribute CLI tools effectively. **AssetOrganizer** serves as an example of how powerful and accessible Swift-based CLI applications can be when designed with care.

Happy coding!
