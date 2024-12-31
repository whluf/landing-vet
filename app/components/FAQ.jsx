"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "¿Qué es PetVetCare?",
      answer:
        "PetVetCare es un sistema integral de gestión para clínicas veterinarias que incluye manejo de citas, historial clínico, inventario y facturación.",
    },
    {
      question: "¿Cómo puedo implementar PetVetCare en mi clínica?",
      answer:
        "La implementación es sencilla. Nuestro equipo te guiará en todo el proceso, desde la configuración inicial hasta la capacitación de tu personal.",
    },
    {
      question: "¿PetVetCare es compatible con dispositivos móviles?",
      answer:
        "Sí, PetVetCare es totalmente responsive y puede ser utilizado en computadoras, tablets y smartphones.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-blue-100 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-blue-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
