import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Menu - St. Joseph Blvd',
    description: "Explore Yemen Gate's Menu – A Culinary Journey of Authentic Yemeni Flavors in St Joseph blvd, Orleans, Ottawa. From delectable appetizers to mouthwatering main courses and delightful desserts, experience the rich taste of Yemen in every dish.",
    keywords: 'St Joseph blvd, Orleans, Ottawa, Yemen gate, restaurant, yemeni cuisine, middle-eastern food, Canada, catering, menu mandi, mazbi, yemen, gate, مطعم, مظبي , مندي , خليجي ,يمني , اكل خليجي, اكل يمني, فطور يمني, عربية , باب اليمن',
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
