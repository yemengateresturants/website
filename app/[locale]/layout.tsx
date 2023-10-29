import '../styles.scss';
import Nav from '@/app/[locale]/components/Nav';
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import type { Metadata } from 'next';
import Footer from '@/app/[locale]/components/Footer';
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: 'Yemeni Gate - Home',
  description: 'Keywords', // TODO: Keywords
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
  console.log('locale: ', locale);

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
