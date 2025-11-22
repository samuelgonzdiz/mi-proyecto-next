'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-5 header-style h-[80px]">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={'/'} className="flex items-center gap-2">
          <h1 className="text-3xl font-medium text-black">MILLION</h1>
        </Link>

        {/* Menú Desktop */}
        <div className="flex justify-between items-center gap-10">
          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-gray-600 hover:text-black">Inicio</a>
            <a href="/productos" className="text-gray-600 hover:text-black">Productos</a>
            <a href="/servicios" className="text-gray-600 hover:text-black">Servicios</a>
            <a href="/contacto" className="text-gray-600 hover:text-black">Contacto</a>
          </nav>

          {/* Botón de acción */}
          <div className="flex gap-2">
            <Button variant="primary_outline">Sigin in</Button>
            <Button variant="primary">Register</Button>
          </div>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
          {/* {open ? 'X' : '≡'} */}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4">
          <a href="/" className="text-gray-700 hover:text-blue-600">Inicio</a>
          <a href="/productos" className="text-gray-700 hover:text-blue-600">Productos</a>
          <a href="/servicios" className="text-gray-700 hover:text-blue-600">Servicios</a>
          <a href="/contacto" className="text-gray-700 hover:text-blue-600">Contacto</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            Iniciar sesión
          </button>
        </nav>
      )}
    </header>
  );
}
