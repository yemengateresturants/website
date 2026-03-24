'use client';
import { FC, useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';

const slides = [
    { image: '/images/promo-1.jpeg', titleKey: 'slide_1_title', subtitleKey: 'slide_1_subtitle' },
    { image: '/images/promo-2.jpeg', titleKey: 'slide_2_title', subtitleKey: 'slide_2_subtitle' },
    { image: '/images/promo-3.jpeg', titleKey: 'slide_3_title', subtitleKey: 'slide_3_subtitle' },
];

const PromoSlideshow: FC = () => {
    const t = useTranslations('page.promo');
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <div className="promo-slideshow">
            <div className="promo-slides-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`promo-slide ${index === current ? 'active' : ''}`}
                    >
                        <img src={slide.image} alt={t(slide.titleKey)} />
                        <div className="promo-slide-overlay" />
                        <div className="promo-slide-badges">
                            <span className="promo-badge-limited">{t('limited')}</span>
                            <span className="promo-badge-branch">{t('branch')}</span>
                        </div>
                        <div className="promo-slide-text">
                            <h3>{t(slide.titleKey)}</h3>
                            <p>{t(slide.subtitleKey)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="promo-arrow promo-arrow-prev" onClick={prev} aria-label="Previous slide">
                &#8249;
            </button>
            <button className="promo-arrow promo-arrow-next" onClick={next} aria-label="Next slide">
                &#8250;
            </button>

            <div className="promo-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`promo-dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PromoSlideshow;
