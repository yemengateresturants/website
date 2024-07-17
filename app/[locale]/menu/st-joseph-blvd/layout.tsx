import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Yemen Gate Orleans: Traditional Yemeni Meals - St Joseph Blvd',
  description: "Experience traditional Yemeni meals like Mandi, Haneeth, Mazbi lamb or chicken with basmati rice besides all day breakfast menu at Yemen Gate, located on St Joseph Blvd in Orleans, Ottawa. Our menu features classic Yemeni spices and recipes passed down through generations. Join us for an unforgettable dining experience",
  keywords: 'Yemeni restaurant St Joseph Orleans, Ottawa, Yemen Gate Orleans, authentic Yemeni food Orleans, yemeni cuisine, middle-eastern food, traditional Yemeni meals Orleans, catering, menu, mandi, mazbi, yemen, gate, best restaurants in Gatineau Quebec, best restaurants in Orleans Ottawa, Middle Eastern food Orleans, St Joseph dining, Orleans Ottawa restaurants, Yemeni cuisine Ottawa, Indian food, مطعم يمني, مظبي , مندي, قلابات ,مطعم خليجي ,يمني , اكل خليجي, اكل يمني, فطور يمني, مطعم شرقي , باب اليمن',
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
