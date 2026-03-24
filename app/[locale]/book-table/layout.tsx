import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Reserve a Table at Yemen Gate - St Joseph Blvd, Orleans',
    description: "Book a table at Yemen Gate restaurant on St Joseph Blvd in Orleans, Ontario. Perfect for family dinners, celebrations, and special occasions. Authentic Yemeni cuisine with halal ingredients.",
    keywords: "book table Yemen Gate, restaurant reservation Orleans, reserve table Ottawa, Yemeni restaurant booking, St Joseph Blvd dining, حجز طاولة باب اليمن, حجز مطعم يمني أوتاوا",
}

export default function BookTableLayout({
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
