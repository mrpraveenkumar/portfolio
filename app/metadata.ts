import type { Metadata } from 'next'

const SITE_URL = 'https://mrpraveenkumar.vercel.app'

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
  metadataBase: new URL(SITE_URL),
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
    type: 'website',
    title: 'Praveen Kumar - Full-Stack Developer & AI/ML Enthusiast',
    description: 'Computer Engineering student specializing in AI & ML, Full-Stack Developer passionate about creating innovative solutions through elegant code.',
    url: SITE_URL,
    siteName: 'Praveen Kumar Portfolio',
    locale: 'en_IN',
    images: [{
      url: `${SITE_URL}/developer-images/1.png`,
      width: 1200,
      height: 630,
      alt: 'Praveen Kumar - Portfolio Preview',
      type: 'image/png',
    }],
  },
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:site_name': 'Praveen Kumar Portfolio',
    'og:locale': 'en_IN',
    'og:type': 'website',
    // WhatsApp specific meta tags
    'og:image:secure_url': `${SITE_URL}/developer-images/1.png`,
    'theme-color': '#000000',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praveen Kumar - Full-Stack Developer & AI/ML Enthusiast',
    description: 'Computer Engineering student specializing in AI & ML, Full-Stack Developer passionate about creating innovative solutions through elegant code.',
    images: [`${SITE_URL}/developer-images/1.png`],
    creator: '@mrpraveenkumar',
    site: SITE_URL,
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