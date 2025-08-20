/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from '../app/i18n';
import Link from 'next/link';

export const Hero = async ({ locale }) => {
  const { t } = await useTranslation(locale, 'common');

  return (
    // Contenedor principal con imagen de fondo
    <div className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
      {/* Capa oscura para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido centrado */}
      <div className="relative container mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          {t('heroSubtitle')}
        </p>
        <Link 
          href={`/${locale}/contact`} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          {t('quoteButton')}
        </Link>
      </div>
    </div>
  );
};