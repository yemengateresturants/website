import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Yemeni Gate - Contact',
    description: "We're Here to assist you with inquiries, reservations, catering services and more",
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
