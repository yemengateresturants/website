import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { LangParamProps } from '@/interfaces/commonProps.interface';
import Link from 'next-intl/link';

const OrderOnline: FC<LangParamProps> = ({ params: { locale } }) => {
    const t = useTranslations('page');

    return (
        <div className="order-page">
            {/* Hero */}
            <div className="order-hero">
                <div className="order-hero-bg" />
                <div className="order-hero-content">
                    <span className="section-label section-label-light">{t("home.orderTitle")}</span>
                    <h1>{t("home.orderDesc")}</h1>
                </div>
            </div>

            {/* Location Cards */}
            <div className="order-locations">
                {/* Bank Street */}
                <div className="order-location-card">
                    <div className="order-location-img">
                        <img src="/images/bank_st_branch.jpeg" alt="Bank Street location" />
                    </div>
                    <div className="order-location-body">
                        <h3>Bank Street, Ottawa</h3>
                        <p className="order-location-address">1559 Bank St, Ottawa, ON K1H 7Z3</p>
                        <div className="order-location-links">
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
                        </div>
                        <a href="tel:+16135266000" className="order-location-phone">
                            (613) 526-6000
                        </a>
                        <Link href="/menu/bank-st" locale={locale} className="text-link">
                            {t("home.exploreMenu")} &rarr;
                        </Link>
                    </div>
                </div>

                {/* St Joseph Blvd */}
                <div className="order-location-card">
                    <div className="order-location-img">
                        <img src="/images/restaurant-dine-in-2.jpeg" alt="St Joseph Boulevard location" />
                    </div>
                    <div className="order-location-body">
                        <h3>St Joseph Blvd, Orleans</h3>
                        <p className="order-location-address">2871 St Joseph Blvd, Orléans, ON K1C 1G8</p>
                        <div className="order-location-links">
                            <a
                                href="https://www.ubereats.com/store/%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%8A%D9%85%D9%86-yemen-gate-orleans/EhgbbBiDW96XNXaZ8N1xOw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn cta-primary"
                            >
                                Uber Eats
                            </a>
                            <a
                                href="https://www.skipthedishes.com/yemen-gate-st-joseph-blvd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn cta-outline"
                            >
                                SkipTheDishes
                            </a>
                        </div>
                        <a href="tel:+16138451715" className="order-location-phone">
                            (613) 845-1715
                        </a>
                        <Link href="/menu/st-joseph-blvd" locale={locale} className="text-link">
                            {t("home.exploreMenu")} &rarr;
                        </Link>
                    </div>
                </div>
            </div>

            {/* GloriaFood Integration Placeholder */}
            {/*
                TO ACTIVATE GLORIAFOOD FREE ORDERING:
                1. Sign up at https://www.gloriafood.com
                2. Set up your restaurant menu and hours
                3. Get your restaurant ID
                4. Add the GloriaFood script to layout.tsx:
                   <script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async />
                5. Add the button here:
                   <span className="glf-button" data-glf-cuid="YOUR_ID" data-glf-ruid="YOUR_RUID">Order Now</span>
            */}
        </div>
    );
};

export default OrderOnline;
