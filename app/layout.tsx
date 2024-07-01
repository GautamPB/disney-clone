import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Disney Clone',
    description: 'Clone of Disney+ built using NextJS 14',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
