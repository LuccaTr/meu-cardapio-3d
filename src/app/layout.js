import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Cardápio Digital 3D',
  description: 'Cardápio em Realidade Aumentada para Restaurantes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        {/* Carrega o script do Google 3D em background */}
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}