import MealsCarousel from "@/app/components/new-menu-style/MealCarousel";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const StJospehMenu = ({ params }: { params: { locale: string } }) => {
  const canonicalUrl: string = `/${params.locale}/menu/st-joseph-blvd`;

  const t = useTranslations();
  const menuData = require('./menu.json'); // Import menu data

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
          <div className="menu_header_image st_joseph_bg">
          <h1>St. Joseph Blvd <br /> (Orleans) {t('page.menu.menuTitle')}</h1>
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

export default StJospehMenu;