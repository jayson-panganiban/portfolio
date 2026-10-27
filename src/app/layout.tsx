import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaysonpanganiban.com"),
  title: "Jayson Panganiban // Technical Specification & Systems Dossier",
  description:
    "Principal Automation Consultant & Full-Stack Product Engineer. 15+ years experience in enterprise test automation, chaos resilience, and customer communication workflows across banking, fintech, crypto and insurance.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jayson Panganiban // Technical Specification & Systems Dossier",
    description:
      "Principal Automation Consultant & Full-Stack Product Engineer. 15+ years of verified enterprise impact.",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/profile.jpg",
        width: 400,
        height: 400,
        alt: "Jayson Panganiban",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0E11" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${sans.variable} ${mono.variable}`}>
      <head>
        {/* Inline script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (!prefersDark) {
                      document.documentElement.classList.remove('dark');
                    } else {
                      document.documentElement.classList.add('dark');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-[var(--signal)] selection:text-[var(--on-signal)]">
        {children}
      </body>
    </html>
  );
}
