'use client';
import { useTranslations } from 'next-intl';
import { FC, useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';

const Contact: FC = () => {
    const t = useTranslations('page');
    const f = useTranslations('form');

    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);

        emailjs.sendForm(
            'service_ax59uib',
            'contact_template',
            e.currentTarget,
            'rvhOsx5t6duYAWuVK'
        ).then(() => {
            setSubmitted(true);
            setSending(false);
        }).catch(() => {
            setSending(false);
            alert('Something went wrong. Please try again.');
        });
    };

    return (
        <div className="contact-page">
            {/* Hero */}
            <div className="contact-hero">
                <div className="contact-hero-bg" />
                <div className="contact-hero-content">
                    <span className="section-label section-label-light">{t('contact.heroTitle')}</span>
                    <h1>{t('contact.title')}</h1>
                    <p>{t('contact.heroSubtitle')}</p>
                </div>
            </div>

            {/* Form */}
            <div className="contact-form-section">
                <h2 className="contact-section-heading">{t('contact.title')}</h2>

                {submitted ? (
                    <div className="booking-success">
                        <h3>{f('thanksMsg')}</h3>
                        <p>{f('respondMsg')}</p>
                    </div>
                ) : (
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <input type="hidden" name="type" value="Contact Inquiry" />

                        <div className="booking-form-grid">
                            <div className="booking-field">
                                <label>{f('name')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={f('placeholder.name')}
                                    required
                                />
                            </div>

                            <div className="booking-field">
                                <label>{f('email')}</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={f('placeholder.email')}
                                    required
                                />
                            </div>

                            <div className="booking-field">
                                <label>{f('phone')}</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={f('placeholder.phone')}
                                />
                            </div>

                            <div className="booking-field full-width">
                                <label>{f('message')}</label>
                                <textarea
                                    name="message"
                                    placeholder={f('placeholder.message')}
                                    rows={4}
                                    required
                                />
                            </div>
                        </div>

                        <div className="booking-submit">
                            <button
                                type="submit"
                                className="cta-btn cta-primary"
                                disabled={sending}
                            >
                                {sending ? '...' : f('submit')}
                            </button>
                        </div>
                    </form>
                )}
            </div>

            {/* Contact Info Cards */}
            <div className="contact-info-section">
                <div className="contact-info-grid">
                    {/* St Joseph */}
                    <div className="contact-info-card">
                        <h3>St Joseph Blvd, Orleans</h3>
                        <div className="contact-info-item">
                            <HiOutlineLocationMarker />
                            <span>2871 St Joseph Blvd, Orleans, ON K1C 1G8</span>
                        </div>
                        <div className="contact-info-item">
                            <HiOutlinePhone />
                            <a href="tel:+16138411999">(613) 841-1999</a>
                        </div>
                        <div className="contact-info-item">
                            <HiOutlineMail />
                            <a href="mailto:orleans@yemengate.ca">orleans@yemengate.ca</a>
                        </div>
                        <div className="contact-info-item">
                            <HiOutlineClock />
                            <div>
                                <span>{t('home.weekdays')}: 11AM - 9PM</span><br />
                                <span>{t('branch.sat')}: 12PM - 10PM</span><br />
                                <span>{t('branch.sun')}: 12PM - 9PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Bank St */}
                    <div className="contact-info-card">
                        <h3>Bank Street, Ottawa</h3>
                        <div className="contact-info-item">
                            <HiOutlineLocationMarker />
                            <span>1394 Bank St, Ottawa, ON K1H 7Y3</span>
                        </div>
                        <div className="contact-info-item">
                            <HiOutlinePhone />
                            <a href="tel:+16137371999">(613) 737-1999</a>
                        </div>
                        <div className="contact-info-item">
                            <HiOutlineMail />
                            <a href="mailto:info@yemengate.ca">info@yemengate.ca</a>
                        </div>
                        <div className="contact-info-item">
                            <HiOutlineClock />
                            <div>
                                <span>{t('home.weekdays')}: 11AM - 9PM</span><br />
                                <span>{t('branch.sat')}: 12PM - 10PM</span><br />
                                <span>{t('branch.sun')}: 12PM - 9PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
