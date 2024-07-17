import {Link, useTranslations} from 'next-intl';
import { FC } from 'react';
import { LangParamProps } from '@/interfaces/commonProps.interface';
import Head from 'next/head';
import Testimonials from '../components/Testimonials';

const Home : FC<LangParamProps> = ({ params: {locale}}) => {

  const t = useTranslations('page');

  const canonicalUrl: string = `/${locale}`;

  const OurMenuComponent: FC = () => {
    return (
      <div className="flex-column menu_wrapper">
        <h1>{t("slider.slide_1_title")}</h1>
        <h3>{t("slider.slide_1_subtitle")}</h3>
          <h2>{t("menu.ourMenu")}</h2>
          <div className="menu_wrapper_btns">
            <Link href={`/menu/bank-st`} locale={locale}>Bank St.</Link>
            <Link href={`/menu/st-joseph-blvd`} locale={locale}>St Joseph Blvd (Orleans)</Link>
          </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className='slide_container'>
        <div className="slide">
          <div className="slide_wrapper slide_wrapper_1" />
          <div className="slide_wrapper slide_wrapper_2" />
          <div className="slide_wrapper slide_wrapper_3" />
        </div>
          <OurMenuComponent />
      </div>
      <div className='bio_section'>
        <div className='bio_section_authentic'>
            <div className="flex-column menu_wrapper">
              <h2>{t("slider.slide_2_title")}</h2>
              <h3>{t("slider.slide_2_subtitle")}</h3>
            </div>
        </div>
        <div className='bio_section_spices'>
            <div className="flex-column menu_wrapper">
              <h2>{t("slider.slide_3_title")}</h2>
              <h3>{t("slider.slide_3_subtitle")}</h3>
            </div>
        </div>
        <div className='bio_section_occations'>
          <div className="occations_section">
            <div className="occations_text_wrapper">
              <h2>{t("home.occations_title")}</h2>
              <h3>{t("home.occations_subtitle")}</h3>
            </div>
              <div className="occations_gallery_wrapper">
                <img src="/images/oud.jpg" className='occations_gallery_wrapper_photo occations_gallery_wrapper_photo-p1' />
                <img src="/images/catering.jpg" className='occations_gallery_wrapper_photo occations_gallery_wrapper_photo-p2' />
                <img src="/images/celebrating.jpg" className='occations_gallery_wrapper_photo occations_gallery_wrapper_photo-p3' />
              </div>
          </div>
        </div>
      </div>
      <div className="reviews_container" id="reviews-and-testimonials">
        <div className="reviews_wrapper full-width">
          <h2 className="primary_title text_centered">{t("home.reviews")}</h2>
          <h3>{t("home.review_text")}</h3>
          <Testimonials />
        </div>
      </div>
    </>
  )
}

export default Home;