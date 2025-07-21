import type React from "react"
import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Praveen Kumar - Computer Engineering Student & Full-Stack Developer',
  description: 'Computer Engineering student specializing in AI & ML, Full-Stack Developer passionate about creating innovative solutions through elegant code.',
  keywords: 'Praveen Kumar, Full Stack Developer, Computer Engineering, AI ML, Web Development, Portfolio, Software Engineer, Kanpur',
  authors: [{ name: 'Praveen Kumar' }],
  creator: 'Praveen Kumar',
  publisher: 'Praveen Kumar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mrpraveenkumar.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
    other: {
      'education': 'https://www.praveenkumar.education'
    }
  },
  openGraph: {
    title: 'Praveen Kumar - Computer Engineering Student & Full-Stack Developer',
    description: 'Computer Engineering student specializing in AI & ML, Full-Stack Developer passionate about creating innovative solutions through elegant code.',
    url: 'https://mrpraveenkumar.vercel.app',
    siteName: 'Praveen Kumar Portfolio',
    images: [
      {
        url: '/developer-images/1.png',
        width: 1200,
        height: 630,
        alt: 'Praveen Kumar - Portfolio Preview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praveen Kumar - Computer Engineering Student & Full-Stack Developer',
    description: 'Computer Engineering student specializing in AI & ML, Full-Stack Developer passionate about creating innovative solutions through elegant code.',
    images: ['/developer-images/1.png'],
    creator: '@mrpraveenkumar',
    site: 'https://mrpraveenkumar.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-site-verification',
  },
  category: 'portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
