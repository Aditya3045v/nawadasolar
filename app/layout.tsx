import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nawadasolar.in'),
  title: {
    default: 'Solar & Electrical Solutions in Nawada - Expert Solar & Electrical Services',
    template: '%s | Solar & Electrical Solutions'
  },
  description: 'Solar & Electrical Solutions in Nawada. Expert providers of Solar Panels, Professional Wiring, Inverters, and Lights. Your trusted electrical contractor in Nawada, Bihar.',
  keywords: ['solar installation nawada', 'solar panels nawada', 'electrical wiring nawada', 'inverter dealer nawada', 'solar subsidy bihar', 'electrical contractor nawada', 'residential solar nawada', 'lights and wiring services', 'best solar shop nawada'],
  authors: [{ name: 'Solar & Electrical Solutions' }],
  creator: 'Solar & Electrical Solutions',
  publisher: 'Solar & Electrical Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nawadasolar.in',
    siteName: 'Solar & Electrical Solutions',
    title: 'Solar & Electrical Solutions in Nawada - Premier Solar & Electrical Services',
    description: 'Providing top-tier Solar Panels, Wiring, Inverters, and Lights in Nawada. Authorized services for homes and businesses.',
    images: [
      {
        url: '/assets/logo.png',
        width: 800,
        height: 800,
        alt: 'Solar & Electrical Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar & Electrical Solutions - Solar & Electrical Experts Nawada',
    description: 'Nawada\'s trusted solar and electrical partner. Quality Solar Panels, Inverters, and professional Wiring services.',
    images: ['/assets/logo.png'],
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
  alternates: {
    canonical: 'https://nawadasolar.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Solar & Electrical Solutions in Nawada",
    "description": "Expert Solar and Electrical services in Nawada, specializing in Solar Panels, professional Wiring, Inverters, and high-quality Lighting solutions.",
    "url": "https://nawadasolar.in",
    "telephone": "+91-8340601998",
    "email": "info@nawadasolar.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. – 120, New Market, Town Thana Road",
      "addressLocality": "Nawada",
      "addressRegion": "Bihar",
      "postalCode": "805110",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.8894",
      "longitude": "85.5414"
    },
    "sameAs": [
      "https://facebook.com/nawadasolar",
      "https://instagram.com/nawadasolar"
    ],
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-[#0f172a] text-[#F8FAFC] font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
