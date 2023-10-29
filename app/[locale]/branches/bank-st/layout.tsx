import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Branch - Bank St',
    description: 'Bank St, Ottawa, Yemeni cuisine, resturant, middle eastrn, food',
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
