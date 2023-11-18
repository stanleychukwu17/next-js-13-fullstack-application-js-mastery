import type { Metadata } from 'next'
import ReduxProvider from './redux/provider'
// import HeaderComp from '@components/Header/HeaderComp'
import HeaderComp from './components/Header/Header'

import './globals.css'



export const metadata: Metadata = {
    title: 'Prompting',
    description: 'Generate the next winner content using Ai',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <HeaderComp />
                    <main>
                        {children}
                    </main>
                </ReduxProvider>
            </body>
        </html>
    )
}