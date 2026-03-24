import {useTranslations} from 'next-intl';
import Link from 'next-intl/link';
import { FC } from 'react';
import { LangParamProps } from '@/interfaces/commonProps.interface';
import Head from 'next/head';

import Testimonials from '../components/Testimonials';
import PromoSlideshow from '../components/PromoSlideshow';

const Home : FC<LangParamProps> = ({ params: {locale}}) => {

  const t = useTranslations('page');

  const canonicalUrl: string = `/${locale}`;

  const featuredDishes = [
    { key: 'lamb_haneeth', image: '/images/lamb_haneeth.png', hideOnMobile: false },
    { key: 'fahsa', image: '/images/fahsa.png', hideOnMobile: false },
    { key: 'liver', image: '/images/liver.png', hideOnMobile: false },
    { key: 'maasoub', image: '/images/maasoub.png', hideOnMobile: false },
    { key: 'lamb_mandi', image: '/images/lamb_mandi.png', hideOnMobile: true },
    { key: 'chicken_mandi', image: '/images/chicken_mandi.png', hideOnMobile: true },
  ];

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">{t("home.badge")}</span>
          <h1 className="hero-title">{t("slider.slide_1_title")}</h1>
          <p className="hero-subtitle">{t("home.subtitle")}</p>
          <div className="hero-ctas">
            <Link href="/order-online" locale={locale} className="cta-btn cta-primary">
              {t("home.orderOnline")}
            </Link>
            <Link href="/book-table" locale={locale} className="cta-btn cta-secondary">
              {t("home.bookTable")}
            </Link>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span />
        </div>
      </section>

      {/* Promo Slideshow */}
      <PromoSlideshow />

      {/* About / Story Section */}
      <section className="story-section">
        <div className="story-inner">
          <div className="story-text">
            <span className="section-label">{t("home.storyLabel")}</span>
            <h2>{t("slider.slide_2_title")}</h2>
            <p>{t("slider.slide_2_subtitle")}</p>
            <Link href={`/menu/bank-st`} locale={locale} className="text-link">
              {t("home.exploreMenu")} &rarr;
            </Link>
          </div>
          <div className="story-image-wrapper">
            <img src="/images/restaurant-dine-in-2.jpeg" alt="Yemen Gate restaurant interior" className="story-image" />
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="dishes-section">
        <div className="dishes-inner">
          <div className="section-header">
            <span className="section-label">{t("home.featuredLabel")}</span>
            <h2>{t("home.featuredTitle")}</h2>
            <p>{t("home.featuredSubtitle")}</p>
          </div>
          <div className="dishes-grid">
            {featuredDishes.map((dish) => (
              <div className={`dish-card ${dish.hideOnMobile ? 'dish-card-hide-mobile' : ''}`} key={dish.key}>
                <div className="dish-card-img">
                  <img src={dish.image} alt={t(`home.dishes.${dish.key}`)} />
                </div>
                <h3>{t(`home.dishes.${dish.key}`)}</h3>
              </div>
            ))}
          </div>
          <div className="dishes-cta">
            <Link href={`/menu/bank-st`} locale={locale} className="cta-btn cta-outline">
              {t("menu.ourMenu")} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Order & Reserve Banner */}
      <section className="action-banner">
        <div className="action-banner-inner">
          <div className="action-banner-card">
            <div className="action-banner-icon">&#129385;</div>
            <h3>{t("home.orderTitle")}</h3>
            <p>{t("home.orderDesc")}</p>
            <Link href="/order-online" locale={locale} className="cta-btn cta-primary">
              {t("home.orderOnline")}
            </Link>
          </div>
          <div className="action-banner-divider" />
          <div className="action-banner-card">
            <div className="action-banner-icon">&#127869;</div>
            <h3>{t("home.reserveTitle")}</h3>
            <p>{t("home.reserveDesc")}</p>
            <Link href="/book-table" locale={locale} className="cta-btn cta-outline">
              {t("home.bookTable")}
            </Link>
          </div>
        </div>
      </section>

      {/* Occasions & Events */}
      <section className="events-section">
        <div className="events-overlay" />
        <div className="events-content">
          <span className="section-label section-label-light">{t("home.eventsLabel")}</span>
          <h2>{t("home.occations_title")}</h2>
          <p>{t("home.occations_subtitle")}</p>
          <Link href={`/contact-us`} locale={locale} className="cta-btn cta-primary">
            {t("home.inquireNow")}
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section" id="reviews-and-testimonials">
        <div className="reviews-inner">
          <div className="section-header">
            <span className="section-label">{t("home.reviewsLabel")}</span>
            <h2>{t("home.reviews")}</h2>
            <p>{t("home.review_text")}</p>
          </div>
          <Testimonials />
        </div>
      </section>
    </>
  )
}

export default Home;
