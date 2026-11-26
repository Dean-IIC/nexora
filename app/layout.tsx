import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { AssociationBanner } from "@/components/features/association-banner";
import { SiteFooter } from "@/components/features/site-footer";
import { SiteHeader } from "@/components/features/site-header";
import { ThemeProvider } from "@/components/features/theme-provider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} — ${siteConfig.theme} Hackathon`, template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["hackathon", "HKBK College of Engineering", "IEEE Bangalore", "cyber security", "edge IoT", "IEEE CASS", "C-DAC", "DEFSEC", "Nexora"],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f1e" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-dvh font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-dvh flex-col">
            <AssociationBanner />
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
