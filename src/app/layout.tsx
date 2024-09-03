import type { Metadata } from "next";
import { WEBSITE_HOST_URL } from '@/lib/constants'
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const meta = {
  title: 'nextjs-boilerplate',
  description:
    'Do you want a next project? Start here.',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | nextjs-boilerplate',
  },
  keywords: [
    "nextjs-boilerplate",
    "Boilerplate",
    "Otoniel Emanuel",
    "Otoniel",
    "Emanuel",
    "euotiniel.com",
    "UI Design",
    "Front-end Developer",
    "Frontend",
    "Developer",
    "Software",
    "Design",
    "Next.js",
    "TailwindCSS",
    "Open source",
  ],
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
      
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

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
