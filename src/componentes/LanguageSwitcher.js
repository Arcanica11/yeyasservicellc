'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { languages } from '../app/i18n/settings';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng) => {
    // Si ya estamos en el idioma seleccionado o no hay ruta, no hacemos nada.
    if (i18n.language === lng || !pathname) return;

    // --- Lógica Corregida ---
    // 1. Dividimos la ruta en segmentos. Ej: '/es/servicios' -> ['', 'es', 'servicios']
    const pathParts = pathname.split('/');

    // 2. Reemplazamos el segundo segmento (que siempre es el idioma) por el nuevo.
    pathParts[1] = lng;

    // 3. Volvemos a unir los segmentos para formar la nueva ruta.
    const newPath = pathParts.join('/');
    
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lng) => (
        <button 
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`px-2 py-1 text-sm rounded-md transition-colors ${
            i18n.language === lng 
              ? 'bg-slate-800 text-white font-bold' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};