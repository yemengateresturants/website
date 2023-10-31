import ContactForm from "@/app/[locale]/components/Contact-form";
import { useTranslations } from "next-intl";

export default function Contact() {

  const t = useTranslations('page');

    return (
      <>
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
