import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Branch - St. Joseph Blvd',
  description: '2871 St Joseph Blvd, Orléans, ON K1C 1G8, Canada, Yemeni cuisine, resturant, middle eastrn, food, yemen, gate, مظبي , مندي , خليجي ,يمني , اكل خليجي, اكل يمني, فطور يمني, عربية , باب اليمن',
  }

export default function RootLayout({
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
