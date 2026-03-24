import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { LangParamProps } from '@/interfaces/commonProps.interface';
import MealsCarousel from '../../../components/new-menu-style/MealCarousel';
import Head from 'next/head';

const BankStMenu: FC<LangParamProps> = ({ params }: { params: { locale: string } }) => {
  const canonicalUrl: string = `/${params.locale}/menu/bank-st`;
  const t = useTranslations();
  const menuData = require('./menu.json');

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
    "acceptsReservations": "Yes"
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* Menu Hero */}
      <div className="menu-hero">
        <div className="menu-hero-bg menu-hero-bank-st" />
        <div className="menu-hero-content">
          <span className="menu-hero-label">{t('page.menu.menuTitle')}</span>
          <h1>Bank Street</h1>
          <p>1559 Bank St, Ottawa, ON K1H 7Z3</p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="menu-page-content">
        <MealsCarousel locale={params.locale} menuData={menuData} />

        {/* Order Section */}
        <div className="menu-order-section">
          <div className="menu-order-inner">
            <h2>{t('page.menu.orderHeader')}</h2>
            <p>{t('page.home.orderDesc')}</p>
            <div className="menu-order-buttons">
              <a
                href="https://www.ubereats.com/ca/store/yemen-gate-bank-st/OmTvklAUU_urFj2CD2SOgQ"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-primary"
              >
                Uber Eats
              </a>
              <a
                href="https://www.skipthedishes.com/yemen-gate-bank"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-outline"
              >
                SkipTheDishes
              </a>
              <a href="tel:+16135266000" className="cta-btn cta-ghost">
                (613) 526-6000
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankStMenu;
