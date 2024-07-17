import ContactForm from "@/app/components/Contact-form";
import { LangParamProps } from "@/interfaces/commonProps.interface";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { FC } from "react";

const Contact: FC<LangParamProps> = ({ params }: { params: { locale: string } }) => {

  const t = useTranslations('page');
  const canonicalUrl: string = `/${params.locale}/contact-us`;

    return (
      <>
        <Head>
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <div className="catering_bg_container">
            <div className="catering_bg" />
        </div>
        <div className="contact_container">
          <h1 className="contact-title">{t('home.title')}</h1>
          <h2 className="contact-subtitle">{t('home.subtitle')}</h2>
          <h2 className="contact-form-title">{t('contact.title')}</h2>
          <ContactForm />
        </div>
      </>
    )
  }

export default Contact;