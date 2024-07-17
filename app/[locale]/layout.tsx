import '../styles.scss';
import Nav from '@/app/components/Nav';
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import type { Metadata } from 'next';
import Footer from '@/app/components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import "react-multi-carousel/lib/styles.css";

export const metadata: Metadata = {
  title: "Authentic Yemeni Cuisine in Ottawa and Orleans - Yemen Gate Restaurant",
  description: "Discover traditional Yemeni dishes besides all-day breakfast like Mandi, Haneeth, seafood, liver or adani chai at Yemen Gate in Ottawa. Visit our Bank Street or St Joseph Blvd, Orleans locations for an authentic Middle Eastern (Mediterranean) dining experience",
  keywords: "Ottawa Vegetarian Yemeni Food, Catering Yemeni Events in Ottawa, Yemeni restaurant Ottawa, Ottawa Local Yemeni Flavors, Yemeni Cuisine Near Me, Ottawa Outdoor Dining Yemeni, Yemeni Restaurant Reservations, authentic Yemeni food, Mandi, Haneeth, Mazbi, Yemen Gate, Bank Street restaurant, Orleans restaurant, traditional Yemeni dishes Middle Eastern cuisine, Arabian restaurant, مطعم يمني, اتاوا,قلابات يمنيه, معصوب, شاي عدني, بهارات ,مظبي , مندي , حنيذ, خليجي ,يمني , اكل خليجي, اكل يمني, فطور يمني"
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: any }
}) {
  const locales: string[] = ['en', 'ar', 'fr'];
  
  const locale: string = useLocale();

  const messages = require(`../../messages/${locale}.json`);

  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  
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
