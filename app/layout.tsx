import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

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
            <body className="bg-white dark:bg-[#1a1c29]">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
