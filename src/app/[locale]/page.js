import { Hero } from '../../componentes/Hero'; // 👈 1. Importa el componente Hero

// Ya no necesitamos 'useTranslation' aquí porque el componente Hero lo maneja
// import { useTranslation } from '../i18n'

export default async function Home({ params: { locale } }) {
  
  // La página ahora solo se encarga de mostrar los componentes
  return (
    <div>
      <Hero locale={locale} />
      
     
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center">Próximamente: Más Secciones</h2>
      </div>

    </div>
  );
}