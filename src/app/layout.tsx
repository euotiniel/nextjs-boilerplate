import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextjs-boilerplate.com/"),
  title: {
    default: "nextjs-boilerplate",
    template: "%s - Do you want a next project? Start here.",
  },
  description: "Do you want a next project? Start here.",
  openGraph: {
    title: "nextjs-boilerplate - Do you want a next project? Start here.",
    description: "Do you want a next project? Start here.",
    url: "https://nextjs-boilerplate.com/",
    siteName: "nextjs-boilerplate - Do you want a next project? Start here.",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "nextjs-boilerplate - Do you want a next project? Start here.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
