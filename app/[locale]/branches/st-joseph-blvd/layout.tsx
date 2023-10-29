import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Branch - St. Joseph Blvd',
  description: 'St. Joseph Blvd, Ottawa, Yemeni cuisine, resturant, middle eastrn, food',
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
