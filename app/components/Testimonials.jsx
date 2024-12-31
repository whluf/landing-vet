import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Daniel Lazo",
      role: "Dueño Vet. Lazo",
      content:
        "PetVetCare Me ha permitido tener todo en un solo lugar, desde la historia clínica de mis pacientes hasta la gestión de mi clínica.",
      rating: 5,
    },
    {
      name: "Adolfo Tassano",
      role: "Dueño Vet. La Pastora",
      content:
        "Desde que implementamos PetVetCare, mejoramos mucho el control de nuestros pacientes, el soporte tecnico es excelente.",
      rating: 5,
    },
    {
      name: "Enrique Sienra",
      role: "Dueño Vet. Sienra",
      content:
        "PetVetCare es una herramienta invaluable. Me permite gestionar de manera eficiente mis citas y avisar con tiempo a mis clientes.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonios"
      className="py-20 bg-gradient-to-r from-blue-50 to-green-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3  gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="mb-4 text-gray-700 italic">
                "{testimonial.content}"
              </p>
              <div className="font-semibold text-blue-600">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
