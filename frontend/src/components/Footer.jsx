'use client';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Columna 1: Logo e información */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-lg font-semibold text-white">MILLION</h2>
          </div>
          <p className="text-sm leading-6">
            Creamos alianzas confiables y eficientes que conectan fabricantes con consumidores.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div>
          <h3 className="text-white font-semibold mb-3">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Inicio</a></li>
            <li><a href="/productos" className="hover:text-white transition">Productos</a></li>
            <li><a href="/servicios" className="hover:text-white transition">Servicios</a></li>
            <li><a href="/contacto" className="hover:text-white transition">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Soporte */}
        <div>
          <h3 className="text-white font-semibold mb-3">Soporte</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/ayuda" className="hover:text-white transition">Centro de ayuda</a></li>
            <li><a href="/politicas" className="hover:text-white transition">Política de privacidad</a></li>
            <li><a href="/terminos" className="hover:text-white transition">Términos y condiciones</a></li>
          </ul>
        </div>

        {/* Columna 4: Redes sociales */}
        <div>
          <h3 className="text-white font-semibold mb-3">Síguenos</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center py-4 font-medium text-5xl md:text-9xl text-gray-100">
        <h1>MILLION</h1>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm">
        © {new Date().getFullYear()} MILLION. Todos los derechos reservados.
      </div>
    </footer>
  );
}
