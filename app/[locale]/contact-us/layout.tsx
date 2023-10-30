import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Yemeni Gate - Contact',
    description: "Get in Touch - We're Here to Assist You. Contact Yemen Gate for Inquiries, Reservations, and More.",
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
