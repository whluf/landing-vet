import {
  CheckCircle,
  Heart,
  Clock,
  Coins,
  Bell,
  BarChartIcon as ChartBar,
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    { text: "Gestión eficiente de citas", icon: Clock },
    { text: "Historial clínico completo", icon: Heart },
    { text: "Control de inventario", icon: ChartBar },
    { text: "Facturación integrada", icon: Coins },
    { text: "Recordatorios automáticos", icon: Bell },
    { text: "Informes detallados", icon: CheckCircle },
  ];

  return (
    <section
      id="beneficios"
      className="py-20 bg-gradient-to-r from-blue-50 to-green-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Beneficios de PetVetCare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
            >
              <benefit.icon className="flex-shrink-0 w-8 h-8 text-green-500" />
              <p className="text-lg text-gray-700">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
