export type ProjectAccent = "blue" | "violet" | "emerald" | "amber" | "rose" | "sky";

export type ProjectCategory =
  | "iOS App"
  | "iOS SDK"
  | "Developer Tool"
  | "CLI Tool"
  | "Open-Source Library"
  | "SwiftUI Library";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  accent: ProjectAccent;
  year: string;
  stars?: number;
  /** Primary link — internal route or external repo. Omitted for closed-source work. */
  href?: string;
  /** Optional App Store link. */
  appStore?: string;
  /** Optional GitHub repo when href is internal. */
  repo?: string;
  /** Company the work was built at (work projects only). */
  company?: string;
  /** Closed-source / enterprise work — rendered without a link. */
  closedSource?: boolean;
  featured: boolean;
}

/** Professional, closed-source work — product names generalized; code can't be shared. */
export const workProjects: Project[] = [
  {
    id: "aviation-maintenance",
    name: "Aviation Maintenance App",
    tagline: "Technician task tracking for airlines",
    description:
      "Enterprise iOS app for aviation maintenance crews. Architected the business-logic layers for task management and automated data synchronization, with concurrency-safe real-time updates and resilient state handling across network failures.",
    category: "iOS App",
    tags: ["UIKit", "Swift Concurrency", "Sync", "Agile"],
    accent: "blue",
    year: "2024 — Present",
    company: "Pinsoft IT Solutions",
    closedSource: true,
    featured: true,
  },
  {
    id: "flight-ops-messaging",
    name: "Flight-Ops Messaging App",
    tagline: "Real-time crew messaging",
    description:
      "Real-time messaging app for flight operations crews. Built thread-safe messaging infrastructure over XMPP with REST integration, retry and connection management, and optimized network usage for varying conditions — covered by integration tests.",
    category: "iOS App",
    tags: ["UIKit", "MVVM", "XMPP", "Realtime"],
    accent: "violet",
    year: "2024 — Present",
    company: "Pinsoft IT Solutions",
    closedSource: true,
    featured: true,
  },
  {
    id: "efb",
    name: "Electronic Flight Bag (EFB)",
    tagline: "Offline-first EFB used by pilots",
    description:
      "iOS Electronic Flight Bag used by flight crews in the cockpit. Built with a combined SwiftUI + UIKit architecture and robust offline caching so charts and operational data stay available without connectivity — engineered for reliability and performance.",
    category: "iOS App",
    tags: ["SwiftUI", "UIKit", "Offline Cache", "Aviation"],
    accent: "rose",
    year: "2024 — Present",
    company: "Pinsoft IT Solutions",
    closedSource: true,
    featured: true,
  },
  {
    id: "identity-verification-sdk",
    name: "Identity Verification SDK",
    tagline: "NFC + face-verification SDK",
    description:
      "Production iOS SDK for identity verification: NFC document reading and face verification with secure data processing, encryption, and asynchronous hardware (NFC, camera) pipelines — performance-tuned and tested for cross-device compatibility.",
    category: "iOS SDK",
    tags: ["Swift", "NFC", "Vision", "SDK"],
    accent: "emerald",
    year: "2021 — 2023",
    company: "Arvis Technology",
    closedSource: true,
    featured: true,
  },
  {
    id: "video-calling-sdk",
    name: "Video Calling SDK",
    tagline: "WebRTC real-time video SDK",
    description:
      "Worked on the iOS side of a real-time video-calling SDK built on WebRTC — call setup, media streaming, and connection handling for one-to-one and group calls, focused on reliability across varying network conditions.",
    category: "iOS SDK",
    tags: ["Swift", "WebRTC", "Realtime", "SDK"],
    accent: "sky",
    year: "2021 — 2023",
    company: "Arvis Technology",
    closedSource: true,
    featured: true,
  },
];

export const featuredProjects: Project[] = [
  {
    id: "sayar",
    name: "Sayar",
    tagline: "Track every expense with confidence",
    description:
      "A natural-language expense tracker. Type “-300 market” and it’s logged — amount, category, the lot. iCloud sync, CSV/JSON export, and smart insights. Private by design.",
    category: "iOS App",
    tags: ["SwiftUI", "iOS", "iCloud", "App Store"],
    accent: "blue",
    year: "2025",
    href: "/sayar",
    featured: true,
  },
  {
    id: "fauxcam",
    name: "FauxCam",
    tagline: "A camera for the iOS Simulator",
    description:
      "The Simulator has no camera. FauxCam injects a fake front/back camera into a simulated app at launch — streaming a still, a video, your Mac’s webcam, or a QR code into AVFoundation. A macOS menu-bar app plus a CLI, leaving nothing behind.",
    category: "Developer Tool",
    tags: ["macOS", "Swift", "AVFoundation", "Menu Bar"],
    accent: "violet",
    year: "2026",
    href: "/fauxcam",
    repo: "https://github.com/mkemalgokce/fauxcam",
    featured: true,
  },
  {
    id: "wimp",
    name: "Wimp",
    tagline: "Find your event photos with AI",
    description:
      "An iOS app that uses face recognition to automatically surface the photos you're in among the hundreds taken at an event. Register your face, enter the event code, and download just your shots in seconds. Live on the App Store.",
    category: "iOS App",
    tags: ["SwiftUI", "Vision", "Face Recognition", "App Store"],
    accent: "amber",
    year: "2026",
    featured: true,
  },
  {
    id: "asset-organizer",
    name: "AssetOrganizer",
    tagline: "Find & remove unused Xcode assets",
    description:
      "A command-line tool that analyzes asset usage across iOS/macOS projects, reports unused images, colors and data sets, and safely cleans them up — shrinking app size and keeping the catalog tidy. Ships with a companion GitHub Action.",
    category: "CLI Tool",
    tags: ["Swift", "CLI", "SPM", "GitHub Action"],
    accent: "emerald",
    year: "2025",
    href: "https://github.com/mkemalgokce/AssetOrganizer",
    featured: true,
  },
  {
    id: "snapshooter",
    name: "SnapShooter",
    tagline: "Snapshot testing for UIKit",
    description:
      "A lightweight library for snapshot testing UIViewControllers. Captures precise snapshots, compares them pixel-by-pixel, highlights visual differences, and attaches diffs to test reports for CI — integrating cleanly with XCTest.",
    category: "Open-Source Library",
    tags: ["Swift", "XCTest", "SPM", "Testing"],
    accent: "amber",
    year: "2024",
    stars: 4,
    href: "https://github.com/mkemalgokce/SnapShooter",
    featured: true,
  },
  {
    id: "tamga",
    name: "Tamga",
    tagline: "An SF Symbol picker for SwiftUI",
    description:
      "A modern, customizable SF Symbol picker framework for SwiftUI — 3000+ symbols with instant search, single or multiple selection, and configurable layout. Built with Clean Architecture, SOLID principles, and full test coverage.",
    category: "SwiftUI Library",
    tags: ["SwiftUI", "Swift", "Clean Architecture", "SPM"],
    accent: "rose",
    year: "2025",
    href: "https://github.com/mkemalgokce/tamga",
    featured: true,
  },
];

export interface MiniProject {
  name: string;
  description: string;
  language: string;
  url: string;
  year: string;
}

export const moreProjects: MiniProject[] = [
  {
    name: "GithubFollowers",
    description:
      "A UIKit app to browse GitHub followers, filter the list, and save favourites — built programmatically.",
    language: "Swift",
    url: "https://github.com/mkemalgokce/GithubFollowers",
    year: "2024",
  },
  {
    name: "BowlingGameTDD",
    description:
      "A bowling-score kata demonstrating Test-Driven Development principles end to end in Swift.",
    language: "Swift",
    url: "https://github.com/mkemalgokce/BowlingGameTDD",
    year: "2024",
  },
  {
    name: "QuizEngine",
    description:
      "A reusable, protocol-oriented quiz engine that drives quiz apps from a clean core.",
    language: "Swift",
    url: "https://github.com/mkemalgokce/QuizEngine",
    year: "2024",
  },
  {
    name: "RickAndMortyAppUIKit",
    description:
      "A UIKit sample app exploring pagination and detail flows on top of the Rick and Morty API.",
    language: "Swift",
    url: "https://github.com/mkemalgokce/RickAndMortyAppUIKit",
    year: "2023",
  },
  {
    name: "PSWeatherApp",
    description: "A clean weather app exploring modern iOS networking and UI patterns.",
    language: "Swift",
    url: "https://github.com/mkemalgokce/PSWeatherApp",
    year: "2024",
  },
  {
    name: "RookBook",
    description: "A Swift experiment in reading-list and book-tracking interactions.",
    language: "Swift",
    url: "https://github.com/mkemalgokce/RookBook",
    year: "2025",
  },
];
