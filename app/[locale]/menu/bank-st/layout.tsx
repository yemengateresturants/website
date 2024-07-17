import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Authentic Yemeni Cuisine at Yemen Gate - Bank Street, Ottawa',
  description: "Discover the rich flavors of best Yemen restaurant in Ottawa. Yemen Gate on Bank Street offers traditional Yemeni dishes like Mandi, Haneeth, Mazbi lamb or chicken with basmati rice in a cozy, authentic setting. Perfect for family dinners, casual meetups, and special occasions.",
  keywords: 'Yemeni restaurant Bank Street Ottawa, Yemen gate, restaurant, yemeni cuisine, middle-eastern food, Mandi, Haneeth, Canada, catering, menu, best Middle Eastern food Ottawa, Yemen Gate Bank Street, Yemeni food Ottawa, Bank Street restaurants, Ottawa dining, Middle Eastern cuisine Ottawa, restuarant near me, مظبي , مندي , خليجي ,يمني , اكل خليجي, اكل يمني, فطور يمني, اتاوا ,باب اليمن',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      {children}
    </>
  )
}
