import {Toaster} from 'react-hot-toast'

import '@/app/globals.css'
import {fontMono, fontSans} from '@/lib/fonts'
import {cn} from '@/lib/utils'
import {TailwindIndicator} from '@/components/tailwind-indicator'
import {Providers} from '@/components/providers'
import {Header} from '@/components/header'
import Script from "next/script";
import {getCopilotConfig} from '@/assets/config'
import {Metadata} from "next";
import {AnimatedSidebar} from '@/components/animated-sidebar';

export const metadata: Metadata = getMetadata(process.env.NEXT_PUBLIC_COPILOT_NAME)

function getMetadata(copilotName: any): Metadata {
  const config = getCopilotConfig(copilotName)
  return {
    title: {
      default: config.TAB_TITLE_BASE,
      template: config.TAB_TITLE_FORMAT
    },
    description: config.DESCRIPTION,
    themeColor: [
      {media: '(prefers-color-scheme: light)', color: 'white'},
      {media: '(prefers-color-scheme: dark)', color: 'black'}
    ],
    icons: {
      icon: config.ICON_PATH,
      shortcut: config.ICON_SHORTCUT,
      apple: config.ICON_APPLE
    }
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
    </head>
    <body
      className={cn(
        'font-sans antialiased',
        fontSans.variable,
        fontMono.variable
      )}
    >
    <Toaster/>
    <Providers attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <AnimatedSidebar>{children}</AnimatedSidebar>
      </div>
      <TailwindIndicator/>
    </Providers>
    </body>
    </html>
  )
}
