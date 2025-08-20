import Link from 'next/link';
import { useTranslation } from '../app/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar = async ({ locale }) => {
  // Obtenemos las traducciones para el Navbar en el servidor
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(locale, 'common');

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo o Nombre de la Empresa */}
        <Link href={`/${locale}`} className="text-xl font-bold text-gray-800">
          {t('companyName', 'Yeya\'s Services')} {/* Añade companyName a tu JSON */}
        </Link>

        {/* Enlaces de Navegación */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href={`/${locale}/services`} className="text-gray-600 hover:text-blue-600">
            {t('navServices', 'Servicios')} {/* Añade navServices a tu JSON */}
          </Link>
          <Link href={`/${locale}/gallery`} className="text-gray-600 hover:text-blue-600">
            {t('navGallery', 'Galería')} {/* Añade navGallery a tu JSON */}
          </Link>
          <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-blue-600">
            {t('navContact', 'Contacto')} {/* Añade navContact a tu JSON */}
          </Link>
        </div>

        {/* Cambiador de Idioma */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
};