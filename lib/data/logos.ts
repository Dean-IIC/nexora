import type { LogoAsset } from "@/components/features/brand-logo";

/** Official logos, sourced from each organisation's website (see README). */
export const logos = {
  hkbk: { src: "/logos/hkbk-group-light.png", dark: "/logos/hkbk-group-dark.png", width: 214, height: 54 },
  ieeeBangalore: { src: "/logos/ieee-bangalore-section.png", width: 685, height: 140 },
  ieeeCass: { src: "/logos/ieee-cass.svg", width: 4321, height: 1198, chip: true },
  cdac: { src: "/logos/cdac.svg", width: 3450, height: 2470, chip: true },
} satisfies Record<string, LogoAsset>;
