import '../styles.scss';
import Nav from '@/app/components/Nav';
import {notFound} from 'next/navigation';
import type { Metadata } from 'next';
import Footer from '@/app/components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import "react-multi-carousel/lib/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yemengate.ca'),
  title: {
    default: "Yemen Gate - Authentic Yemeni Cuisine in Ottawa & Orleans",
    template: "%s | Yemen Gate"
  },
  description: "Discover traditional Yemeni dishes like Mandi, Haneeth, seafood, liver and Adani chai at Yemen Gate in Ottawa. Visit our Bank Street or St Joseph Blvd, Orleans locations for an authentic halal dining experience.",
  keywords: "Yemen Gate, Yemeni restaurant Ottawa, Yemeni restaurant Orleans, authentic Yemeni food, Mandi, Haneeth, halal restaurant Ottawa, Middle Eastern cuisine, Arabian restaurant, book table Ottawa, Yemeni catering, مطعم يمني أوتاوا, باب اليمن, مندي, حنيذ, اكل يمني, حلال أوتاوا",
  openGraph: {
    type: 'website',
    siteName: 'Yemen Gate باب اليمن',
    title: 'Yemen Gate - Authentic Yemeni Cuisine in Ottawa & Orleans',
    description: 'Traditional Yemeni dishes crafted with premium halal ingredients. Mandi, Haneeth, Fahsa and more. Two locations in Ottawa.',
    url: 'https://www.yemengate.ca',
    images: [{
      url: '/images/restaurant-dine-in-1.jpeg',
      width: 1200,
      height: 630,
      alt: 'Yemen Gate Restaurant'
    }],
    locale: 'en_CA',
    alternateLocale: ['ar', 'fr_CA'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yemen Gate - Authentic Yemeni Cuisine',
    description: 'Traditional Yemeni dishes in Ottawa & Orleans. Mandi, Haneeth, and more.',
    images: ['/images/restaurant-dine-in-1.jpeg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
      'fr': '/fr',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: any }
}) {
  const locales: string[] = ['en', 'ar', 'fr'];
  const locale: string = params?.locale ?? 'en';

  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const messages = require(`../../messages/${locale}.json`);
  
  return (
    <html lang={locale ?? 'en'}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Nav params={{locale}}/>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
