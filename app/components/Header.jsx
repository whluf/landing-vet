"use client";
import { useState } from "react";
import { Menu, X, PawPrintIcon as Paw } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/50 text-white backdrop-filter backdrop-blur-lg shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Paw className="w-8 h-8 text-teal-300" />
          <span className="text-2xl font-bold antialiased text-teal-300">
            PetVetCare
          </span>
        </div>
        <nav className="hidden md:flex space-x-6">
          {["Beneficios", "Servicios", "Testimonios", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white font-semibold hover:text-teal-400 transition-colors duration-300 "
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 backdrop-filter backdrop-blur-lg bg-white/80 shadow-md">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {["Beneficios", "Servicios", "Testimonios", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-500 hover:text-teal-300 transition-colors duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
