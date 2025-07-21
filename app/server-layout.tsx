import { metadata } from './metadata'
import RootLayout from './layout'

export { metadata }

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayout>{children}</RootLayout>
} 