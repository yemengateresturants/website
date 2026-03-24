'use client';
import { useTranslations } from 'next-intl';
import { FC, useState, useMemo, FormEvent } from 'react';
import emailjs from 'emailjs-com';

// St Joseph Blvd hours
const STORE_HOURS: Record<number, { open: number; close: number }> = {
    0: { open: 12, close: 21 }, // Sunday
    1: { open: 11, close: 21 }, // Monday
    2: { open: 11, close: 21 }, // Tuesday
    3: { open: 11, close: 21 }, // Wednesday
    4: { open: 11, close: 21 }, // Thursday
    5: { open: 11, close: 21 }, // Friday
    6: { open: 12, close: 22 }, // Saturday
};

function getMinBookingDate(): string {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function getDefaultTime(selectedDate: string): string {
    const now = new Date();
    const today = getMinBookingDate();
    const selected = new Date(selectedDate + 'T00:00:00');
    const dayOfWeek = selected.getDay();
    const hours = STORE_HOURS[dayOfWeek];

    if (selectedDate === today) {
        // 2 hours from now, rounded up to next :00
        let earliest = now.getHours() + 2;
        if (now.getMinutes() > 0) earliest += 1;

        if (earliest >= hours.close) {
            // Store closed for booking today, return opening time
            return `${String(hours.open).padStart(2, '0')}:00`;
        }
        if (earliest < hours.open) {
            return `${String(hours.open).padStart(2, '0')}:00`;
        }
        return `${String(earliest).padStart(2, '0')}:00`;
    }

    // Future date — default to opening time
    return `${String(hours.open).padStart(2, '0')}:00`;
}

function getTimeOptions(selectedDate: string): string[] {
    const now = new Date();
    const today = getMinBookingDate();
    const selected = new Date(selectedDate + 'T00:00:00');
    const dayOfWeek = selected.getDay();
    const hours = STORE_HOURS[dayOfWeek];
    const options: string[] = [];

    let startHour = hours.open;

    if (selectedDate === today) {
        // At least 2 hours from now, rounded up
        let earliest = now.getHours() + 2;
        if (now.getMinutes() > 0) earliest += 1;

        if (earliest > startHour) {
            startHour = earliest;
        }
    }

    // Last booking 1 hour before close
    const lastBooking = hours.close - 1;

    for (let h = startHour; h <= lastBooking; h++) {
        options.push(`${String(h).padStart(2, '0')}:00`);
    }

    // If no slots available (store closed or too late), show 12:00 as fallback
    if (options.length === 0) {
        options.push('12:00');
    }

    return options;
}

const BookTable: FC = () => {
    const t = useTranslations('page');
    const f = useTranslations('form');

    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [selectedDate, setSelectedDate] = useState(getMinBookingDate());
    const [selectedTime, setSelectedTime] = useState(() => getDefaultTime(getMinBookingDate()));

    const timeOptions = useMemo(() => getTimeOptions(selectedDate), [selectedDate]);

    // When date changes, reset time to default for that date
    const handleDateChange = (date: string) => {
        setSelectedDate(date);
        const newDefault = getDefaultTime(date);
        setSelectedTime(newDefault);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);

        const form = e.currentTarget;

        emailjs.sendForm(
            'service_qxxp224',
            'reservation_template',
            form,
            'rvhOsx5t6duYAWuVK'
        ).then(() => {
            setSubmitted(true);
            setSending(false);
        }).catch(() => {
            setSending(false);
            alert('Something went wrong. Please call us to make a reservation.');
        });
    };

    if (submitted) {
        return (
            <div className="booking-page">
                <div className="booking-success">
                    <h3>{f('thanksMsg')}</h3>
                    <p>{f('respondMsg')}</p>
                </div>
            </div>
        );
    }

    const reservationSchema = {
        "@context": "https://schema.org",
        "@type": "FoodEstablishment",
        "name": "Yemen Gate باب اليمن - St Joseph Blvd",
        "image": "https://www.yemengate.ca/images/restaurant-dine-in-1.jpeg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "2871 St Joseph Blvd",
            "addressLocality": "Orléans",
            "addressRegion": "ON",
            "postalCode": "K1C 1G8",
            "addressCountry": "CA"
        },
        "telephone": "+16138411999",
        "url": "https://www.yemengate.ca/book-table",
        "servesCuisine": "Yemeni",
        "priceRange": "$$",
        "acceptsReservations": true,
        "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "11:00", "closes": "21:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "12:00", "closes": "22:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "12:00", "closes": "21:00" }
        ],
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.yemengate.ca/book-table"
            },
            "result": {
                "@type": "FoodEstablishmentReservation",
                "name": "Table Reservation"
            }
        }
    };

    return (
        <div className="booking-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reservationSchema) }}
            />
            {/* Hero */}
            <div className="booking-hero">
                <div className="booking-hero-bg" />
                <div className="booking-hero-content">
                    <span className="section-label section-label-light">{t("home.reserveTitle")}</span>
                    <h1>{t("home.reserveDesc")}</h1>
                </div>
            </div>

            {/* Form */}
            <div className="booking-form-wrapper">
                <p className="booking-branch-note">{t('booking.stJosephOnly')}</p>
                <form className="booking-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="location" value="St Joseph Blvd, Orleans" />
                    <input type="hidden" name="type" value="Table Reservation" />
                    <input type="hidden" name="date" value={`${selectedDate} ${selectedTime}`} />

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
                            <label>{f('phone')}</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder={f('placeholder.phone')}
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
                            <label>{f('date')}</label>
                            <input
                                type="date"
                                value={selectedDate}
                                min={getMinBookingDate()}
                                onChange={(e) => handleDateChange(e.target.value)}
                                required
                            />
                        </div>

                        <div className="booking-field">
                            <label>{t('booking.time')}</label>
                            <select
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                                required
                            >
                                {timeOptions.map((time) => (
                                    <option key={time} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>

                        <div className="booking-field">
                            <label>{t('booking.guests')}</label>
                            <select name="guests" required defaultValue="2">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10+">10+</option>
                            </select>
                        </div>

                        <div className="booking-field full-width">
                            <label>{f('message')}</label>
                            <textarea
                                name="message"
                                placeholder={f('placeholder.message')}
                                rows={3}
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
            </div>
        </div>
    );
};

export default BookTable;
