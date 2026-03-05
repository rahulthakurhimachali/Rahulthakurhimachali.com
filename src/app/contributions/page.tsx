import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Contributions | Rahul Thakur Himachali",
  description:
    "Open source contributions by Rahul Thakur Himachali to React Native, Mixpanel, and other projects.",
};

type Contribution = {
  repo: string;
  title: string;
  description: string;
  url: string;
  status: "merged" | "open";
};

const contributions: Contribution[] = [
  {
    repo: "mixpanel/docs",
    title: "Fix typo in React Native docs",
    description:
      "My first open source contribution — spotted and fixed a typo while integrating Mixpanel into an app.",
    url: "https://github.com/mixpanel/docs/pull/1765",
    status: "merged",
  },
  {
    repo: "VNDRN/react-native-navigation-bar-detector",
    title: "Bump target and compile SDK to 35 for Android 15",
    description:
      "Updated Android SDK versions to fix compatibility issues on Pixel 9 devices running Android 15.",
    url: "https://github.com/VNDRN/react-native-navigation-bar-detector/pull/5",
    status: "merged",
  },
  {
    repo: "react-native-community/directory",
    title: "Add react-native-dashed-view to directory",
    description:
      "Added my customizable dashed line component for React Native to the official community directory.",
    url: "https://github.com/react-native-community/directory/pull/2189",
    status: "merged",
  },
  {
    repo: "react-native-community/directory",
    title: "Add react-native-chat-typing-indicator to directory",
    description:
      "Added my chat typing animation library to the official React Native community directory.",
    url: "https://github.com/react-native-community/directory/pull/2171",
    status: "merged",
  },
  {
    repo: "react-native-community/directory",
    title: "Fix CI lint errors",
    description:
      "Identified and fixed linting issues from recent merged PRs that were causing CI pipeline failures.",
    url: "https://github.com/react-native-community/directory/pull/2152",
    status: "merged",
  },
  {
    repo: "react-native-community/directory",
    title: "Add react-native-nitro-wallpaper to directory",
    description:
      "Added my Android wallpaper library built with Nitro Modules to the official community directory.",
    url: "https://github.com/react-native-community/directory/pull/2151",
    status: "merged",
  },
  {
    repo: "a7medev/react-native-ml-kit",
    title: "Add full documentation using Docusaurus",
    description:
      "Built comprehensive documentation from scratch covering face detection, barcode scanning, image labeling, text recognition, and more.",
    url: "https://github.com/a7medev/react-native-ml-kit/pull/78",
    status: "open",
  },
];

export default function Contributions() {
  return (
    <section className="mb-8">
      <h1 className="mb-2 text-2xl font-bold">Open Source Contributions</h1>
      <p className="mb-8 text-sm text-gray-600 dark:text-gray-400">
        Pull requests and contributions to projects I use and care about.
      </p>

      <ul className="space-y-4">
        {contributions.map((contrib) => (
          <li key={contrib.url}>
            <Link
              href={contrib.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg p-4 transition hover:bg-stone-200/50 dark:hover:bg-zinc-800/50"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {contrib.repo}
                </span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    contrib.status === "merged"
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  }`}
                >
                  {contrib.status}
                </span>
              </div>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {contrib.title}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {contrib.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
