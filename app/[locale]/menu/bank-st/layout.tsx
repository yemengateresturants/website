import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Menu - Bank St.',
    description: "Explore Yemen Gate's Menu – A Culinary Journey of Authentic Yemeni Flavors in Ottawa. From delectable appetizers to mouthwatering main courses and delightful desserts, experience the rich taste of Yemen in every dish.",
    keywords: 'Bank St, Ottawa, Yemen gate, restaurant, yemeni cuisine, middle-eastern food, Canada, catering, menu',
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
