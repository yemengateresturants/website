import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Menu - St. Joseph Blvd',
    description: '', // TODO: Keywords
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
