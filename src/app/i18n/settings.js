export const fallbackLng = 'es'
export const languages = [fallbackLng, 'en']
export const defaultNS = 'common'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true, // Descomenta para ver logs en la consola
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}