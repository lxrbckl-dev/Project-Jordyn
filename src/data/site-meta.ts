import { DATA } from "@/data/data";

/**
 * Link-preview (Open Graph / Twitter card) metadata.
 * This is the single place to edit how this site unfurls when its URL is
 * shared (iMessage, Slack, Twitter, etc.). Edit these values as needed.
 */
export const SITE_META = {
  // Title shown on the preview card and in the browser tab.
  title: "Jordyn Barger",
  // One-line description shown under the title on the preview card.
  description:
    "B.A. Economics & B.A. Mathematics, High Honors — William Jewell College",
  // Preview image — Jordyn's profile picture, pulled from data.tsx so it stays in sync.
  ogImage: DATA.avatarUrl,
  // Canonical public URL of the site (edit to the real deployed domain).
  url: "https://jbarger.app",
};
