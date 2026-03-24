import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Order Online - Yemen Gate | Authentic Yemeni Food Delivery & Pickup',
    description: "Order authentic Yemeni food online for pickup or delivery from Yemen Gate restaurant in Ottawa and Orleans. Mandi, Haneeth, Fahsa, and more.",
    keywords: "order Yemeni food online, Yemen Gate delivery, Yemeni food pickup Ottawa, order Mandi online, طلب أونلاين باب اليمن, توصيل مطعم يمني أوتاوا",
}

export default function OrderLayout({
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
