import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <UserProvider>
                <body className={inter.className}>{children}</body>
            </UserProvider>
        </html>
    )
}
