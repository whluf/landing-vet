import { Calendar, FileText, Package, CreditCard } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Gestión de Citas",
      icon: Calendar,
      description:
        "Organiza y gestiona las citas de tus pacientes de manera eficiente.",
    },
    {
      name: "Historial Clínico",
      icon: FileText,
      description:
        "Mantén un registro detallado del historial médico de cada mascota.",
    },
    {
      name: "Control de Inventario",
      icon: Package,
      description:
        "Administra tu stock de medicamentos y productos con facilidad.",
    },
    {
      name: "Facturación",
      icon: CreditCard,
      description: "Genera facturas y gestiona los pagos de forma integrada.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-blue-50 to-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <service.icon className="w-16 h-16 mx-auto mb-4 text-blue-500 group-hover:text-green-500 transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
