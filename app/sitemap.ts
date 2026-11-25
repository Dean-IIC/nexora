import type { MetadataRoute } from "next";

import { tracks } from "@/lib/data/tracks";
import { mainNav, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...mainNav.map((n) => n.href), "/register", ...tracks.map((t) => `/tracks/${t.slug}`)];
  return paths.map((p) => ({ url: `${siteConfig.url}${p}`, lastModified: new Date() }));
}
