import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

/* Font Imports */
const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

/* Metadata */
export const metadata: Metadata = {
  metadataBase: new URL('https://talhasajjad.com'),
  title: 'Talha Sajjad - Full Stack Developer & AI Engineer',
  description:
    'Premium personal portfolio of Talha Sajjad. Full Stack Web Developer, AI Engineer, and Embedded Systems Engineer. Building digital experiences through development, design, and artificial intelligence.',
  keywords: [
    'Full Stack Developer',
    'Next.js',
    'React',
    'AI Engineer',
    'Embedded Systems',
    'Web Development',
    'Django',
    'Flask',
    'Python',
  ],
  authors: [{ name: 'Talha Sajjad' }],
  creator: 'Talha Sajjad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talhasajjad.com',
    siteName: 'Talha Sajjad Portfolio',
    title: 'Talha Sajjad - Full Stack Developer & AI Engineer',
    description:
      'Premium personal portfolio showcasing full stack development, AI engineering, and embedded systems projects.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Talha Sajjad Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talha Sajjad - Full Stack Developer & AI Engineer',
    description:
      'Premium personal portfolio showcasing full stack development, AI engineering, and embedded systems projects.',
    creator: '@talhasajjad',
    images: {
      url: '/og-image.png',
      alt: 'Talha Sajjad Portfolio',
    },
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
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://talhasajjad.com',
  },
};

/* Viewport */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
  themeColor: '#F5EAD7',
};

/* Root Layout */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Talha Sajjad',
              url: 'https://talhasajjad.com',
              description:
                'Full Stack Web Developer, AI Engineer, and Embedded Systems Engineer',
              image: '/avatar/profile.png',
              sameAs: [
                'https://github.com/talhasajjad',
                'https://linkedin.com/in/talhasajjad',
              ],
              jobTitle: 'Full Stack Developer',
            }),
          }}
        />
      </head>
      <body className="bg-cream text-black antialiased">
        {children}
      </body>
    </html>
  );
}
