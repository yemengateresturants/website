import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Menu - Bank St.',
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
