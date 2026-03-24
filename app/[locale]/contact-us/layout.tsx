import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us - Yemen Gate Restaurant | Ottawa & Orleans',
    description: "Get in touch with Yemen Gate restaurant. Visit us at St Joseph Blvd in Orleans or Bank Street in Ottawa. Inquiries, reservations, catering, and event bookings.",
    keywords: "contact Yemen Gate, Yemeni restaurant Ottawa phone, Yemen Gate Orleans address, تواصل باب اليمن, مطعم يمني أوتاوا عنوان",
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
