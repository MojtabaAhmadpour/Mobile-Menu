import './globals.css'


export const metadata = {
  title: 'منو موبایلی',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  )
}
