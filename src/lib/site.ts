export const site = {
  name: "Mustafa Kemal GÖKÇE",
  shortName: "MKG",
  role: "iOS Developer",
  url: "https://mkemalgokce.github.io",
  email: "mkemaldev@gmail.com",
  location: "Istanbul, Türkiye",
  bio: "iOS Developer with 4+ years of experience building elegant, reliable apps with Swift and SwiftUI — clean architecture, thoughtful motion, and a love for the details. Open to new opportunities.",
  socials: {
    github: "https://github.com/mkemalgokce",
    linkedin: "https://www.linkedin.com/in/mkemalgokce",
    appStore: "https://apps.apple.com/developer/mustafa-kemal-gokce",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;
