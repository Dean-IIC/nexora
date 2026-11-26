import Image from "next/image";

import { cn } from "@/lib/utils";

export type LogoAsset = {
  /** Logo used in light mode (and in both modes when `dark` is absent). */
  src: string;
  /** Optional variant for dark mode, e.g. a white version. */
  dark?: string;
  width: number;
  height: number;
  /** Render on a white chip so dark-coloured logos stay legible in dark mode. */
  chip?: boolean;
};

/** Renders an organisation logo with an optional dark-mode variant. */
export function BrandLogo({ logo, alt, className }: { logo: LogoAsset; alt: string; className?: string }) {
  const img = (src: string, extra?: string) => (
    <Image
      src={src}
      alt={alt}
      width={logo.width}
      height={logo.height}
      unoptimized={src.endsWith(".svg")}
      className={cn("h-full w-auto object-contain", extra)}
    />
  );

  return (
    <span className={cn("inline-flex h-10 items-center", logo.chip && "rounded-lg bg-white px-3 py-2 shadow-sm", className)}>
      {logo.dark ? (
        <>
          {img(logo.src, "dark:hidden")}
          {img(logo.dark, "hidden dark:block")}
        </>
      ) : (
        img(logo.src)
      )}
    </span>
  );
}
