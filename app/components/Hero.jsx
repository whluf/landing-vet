"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover opacity-60"
      >
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-green-900/30"></div>
      <div className="z-10 text-center text-white max-w-5xl px-6">
        <h1
          className={`text-6xl md:text-8xl font-bold mb-6 tracking-tight transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            PetVet
          </span>
          <span className="text-white">Care</span>
        </h1>
        <p
          className={`text-xl md:text-2xl max-w-xl mb-10  font-light transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Revoluciona la gestión de tu clínica veterinaria con un sistema
          integral diseñado para el cuidado moderno de mascotas
        </p>
        <a
          href="https://wa.me/59899693669?text=¡Hola!%20Quiero%20más%20información%20sobre%20PetVetCare"
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-white text-blue-900 hover:text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:scale-105 transform inline-flex items-center space-x-2 shadow-lg hover:shadow-xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span>Solicitar Demo</span>
          <ArrowRight className="w-5 h-5  ml-2" />
        </a>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div
          className={`animate-bounce transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ArrowRight className="w-8 h-8 text-white transform rotate-90" />
        </div>
      </div>
    </section>
  );
}
