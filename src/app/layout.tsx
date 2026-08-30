import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { studio } from "@/data/studio";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinnovations.vercel.app"),
  title: {
    default: `${studio.name} - ${studio.tagline}`,
    template: `%s - ${studio.name}`,
  },
  description: studio.statement,
  openGraph: {
    title: `${studio.name} - ${studio.tagline}`,
    description: studio.statement,
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${interTight.variable} ${plexMono.variable}`}
    >
      <body className="isolate">
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
