import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Head from "next/head";
import MealsCarousel from "@/app/components/new-menu-style/MealCarousel";

const StJosephMenu = ({ params }: { params: { locale: string } }) => {
  const canonicalUrl: string = `/${params.locale}/menu/st-joseph-blvd`;
  const t = useTranslations();
  const menuData = require('./menu.json');

  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "Restaurant",
    "name": "Yemen Gate باب اليمن - St Joseph Blvd",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/bb/98/c1/caption.jpg?w=1400&h=-1&s=1",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2871 St Joseph Blvd",
      "addressLocality": "Orléans",
      "addressRegion": "ON",
      "postalCode": "K1C 1G8",
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
    "telephone": "+16138451715",
    "menu": "https://www.yemengate.ca/menu/st-joseph-blvd",
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
        <div className="menu-hero-bg menu-hero-st-joseph" />
        <div className="menu-hero-content">
          <span className="menu-hero-label">{t('page.menu.menuTitle')}</span>
          <h1>St Joseph Blvd <span>(Orleans)</span></h1>
          <p>2871 St Joseph Blvd, Orléans, ON K1C 1G8</p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="menu-page-content">
        <MealsCarousel locale={params.locale} menuData={menuData} />

        {/* Reserve Section */}
        <div className="menu-order-section">
          <div className="menu-order-inner">
            <h2>{t('page.home.reserveTitle')}</h2>
            <p>{t('page.home.reserveDesc')}</p>
            <div className="menu-order-buttons">
              <Link href="/book-table" locale={params.locale} className="cta-btn cta-primary">
                {t('page.home.bookTable')}
              </Link>
              <a href="tel:+16138451715" className="cta-btn cta-ghost">
                (613) 845-1715
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StJosephMenu;
