import './globals.css'
import { Poppins } from 'next/font/google'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { Navbar } from '../../componentes/Navbar' // 👈 1. Importa la Navbar

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata = {
  title: 'Yeya\'s Services LLC',
  description: 'Servicios profesionales de limpieza y pintura para tu hogar y negocio',
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`${poppins.className} bg-gray-50`}>
        <Navbar locale={locale} />
        <main>
          {children}
        </main>
        {/* Aquí podrías agregar un Footer en el futuro */}
      </body>
    </html>
  )
}