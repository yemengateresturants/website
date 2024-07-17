import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { LangParamProps } from '@/interfaces/commonProps.interface';
import Link from 'next/link';
import Image from 'next/image';
import MealsCarousel from '../../../components/new-menu-style/MealCarousel';
import Head from 'next/head';

const BankStMenu: FC<LangParamProps> = ({ params }: { params: { locale: string } }) => {
  const canonicalUrl: string = `/${params.locale}/menu/bank-st`;

  const t = useTranslations();
  const menuData = require('./menu.json'); // Import menu data

  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "Restaurant",
    "name": "Yemen Gate باب اليمن - Bank Street",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c6/d1/59/yemen-gate.jpg?w=1100&h=-1&s=1",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1559 Bank St",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "postalCode": "K1H 7Z3",
      "addressCountry": "CA"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Omar Alsadi"
        }
      }
    ],
    "url": "https://www.yemengate.ca/",
    "telephone": "+16135266000",
    "menu": "https://www.yemengate.ca/menu/bank-st",
    "servesCuisine": "Yemeni Cuisine",
    "priceRange": "$",
    "acceptsReservations": "No"
};

  return (
    <>
      <Head>
          <script type="application/ld+json">
              {JSON.stringify(schemaMarkup)}
          </script>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="menu_header_image bank_st_menu_bg">
        <h1>Bank St. <br /> {t('page.menu.menuTitle')}</h1>
      </div>
      <div className="card_box_container">
        <MealsCarousel locale={params.locale} menuData={menuData} />
        <div className="order_btns_container">
          <h2>{t('page.menu.orderHeader')}</h2>
          <div className="order_btns_wrapper">
            <Link href="https://www.ubereats.com/ca/store/yemen-gate-bank-st/OmTvklAUU_urFj2CD2SOgQ">
              <Image className="order-btn" src="/images/uber_eats.jpg" width='150' height='75' alt="Uber Eats Button" />
            </Link>
            <Link href="https://www.skipthedishes.com/yemen-gate-bank">
              <Image className="order-btn" src="/images/skip.png" width='150' height='75' alt="Doordash Button" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankStMenu;