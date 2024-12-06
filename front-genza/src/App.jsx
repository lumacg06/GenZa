import React from "react";
import "./App.css"; // Importa Tailwind

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-teal-500 min-h-screen text-white font-sans">
      {/* Encabezado */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold tracking-widest">
          Exprésate con el estilo <span className="text-pink-300">GenZa</span>
        </h1>
      </header>

      {/* Seccion de marcas */}
      <section className="flex justify-center gap-8 py-8">
        {[
          {
            logo: "gef", // Coloca el nombre de los logos aqui
            slogan: "GEF France",
            text: "Exprésate con confianza",
          },
          {
            logo: "punto_blanco",
            slogan: "Punto Blanco",
            text: "Diseño y comodidad premium",
          },
          {
            logo: "galax",
            slogan: "Galax",
            text: "Conecta con tu estilo",
          },
        ].map((brand, index) => (
          <div
            key={index}
            className="relative group w-48 h-48 rounded-lg bg-white"
          >
            <img
              src={`/logos/${brand.logo}.png`} // Coloca la ruta de tus imágenes
              alt={brand.slogan}
              className="w-full h-full object-contain rounded-lg opacity-70 group-hover:opacity-0 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-center rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
              <h2 className="text-lg font-bold">{brand.slogan}</h2>
              <p className="text-sm">{brand.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Pie de página */}
      <footer className="bg-teal-600 py-4 text-center">
        <p className="text-sm">
          Carrera 48 Nro 52 sur 81 Sabaneta, Antioquia - Colombia
        </p>
      </footer>
    </div>
  );
}

export default App;