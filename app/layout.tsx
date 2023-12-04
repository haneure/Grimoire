import { Toaster } from 'sonner';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { ModalProvider } from '@/components/providers/modal-provider';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grimoire',
  description: 'The secret where knowledge remains',
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/afootprint.png",
      href: "/afootprint.png"
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/afootprint-dark.png",
      href: "/afootprint-dark.png"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey='grimoire-theme'
          >
            <Toaster position='bottom-center' />
            {children}
            <ModalProvider />
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
