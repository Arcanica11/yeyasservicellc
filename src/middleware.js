import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'
import { languages, fallbackLng } from './app/i18n/settings'

// Función para obtener el mejor idioma basado en las cabeceras del navegador
function getLocale(request) {
  const headers = {}
  request.headers.forEach((value, key) => (headers[key] = value))

  // Las cabeceras de Negotiator esperan un objeto simple
  const negotiatorHeaders = { 'accept-language': headers['accept-language'] }
  
  // Obtiene los idiomas soportados por la librería
  const locales = [...languages]

  // Usa Negotiator y intl-localematcher para encontrar el mejor idioma
  let negotiator = new Negotiator({ headers: negotiatorHeaders })
  let bestLocale = match(negotiator.languages(locales), locales, fallbackLng)
  
  return bestLocale
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  // Revisa si la ruta ya tiene un prefijo de idioma (ej: /es/servicios)
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Si no tiene idioma, redirige a la ruta con el idioma detectado
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

// Configuración del Matcher
export const config = {
  matcher: [
    // Omitir todas las rutas internas (api, _next/static, _next/image, assets, etc.)
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
  ],
}