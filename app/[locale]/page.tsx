import {Link, useTranslations} from 'next-intl';
import { FC } from 'react';
import { LangParamProps } from '@/interfaces/commonProps.interface';
import Head from 'next/head';

const Home : FC<LangParamProps> = ({ params: {locale}}) => {

  const t = useTranslations('page');

  const canonicalUrl: string = `/${locale}`;

  const OurMenuComponent: FC = () => {
    return (
      <div className="flex-column menu_warpper">
          <h1>{t("menu.ourMenu")}</h1>
          <div className="menu_warpper_btns">
            <Link href={`/menu/bank-st`} locale={locale}>Bank St.</Link>
            <Link href={`/menu/st-joseph-blvd`} locale={locale}>St Joseph Blvd (Orleans)</Link>
          </div>
        </div>
    )
  }

  return (
    <div className='slide_container'>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="slide">
        <div className="slide_wrapper slide_wrapper_1">
          <h2>{t("slider.slide_1_title")}</h2>
          <h3>{t("slider.slide_1_subtitle")}</h3>
          <OurMenuComponent />
        </div>
        <div className="slide_wrapper slide_wrapper_2">
          <h2>{t("slider.slide_2_title")}</h2>
          <h3>{t("slider.slide_2_subtitle")}</h3>
          <OurMenuComponent />
        </div>
        <div className="slide_wrapper slide_wrapper_3">
          <h2>{t("slider.slide_3_title")}</h2>
          <h3>{t("slider.slide_3_subtitle")}</h3>
          <OurMenuComponent />
        </div>
        
      </div>
    </div>
  )
}

export default Home;