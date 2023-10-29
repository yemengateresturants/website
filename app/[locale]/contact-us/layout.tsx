import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Yemeni Gate - Contact',
    description: 'contact page for getting support or sharing feedbacks', // TODO: Keywords
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
