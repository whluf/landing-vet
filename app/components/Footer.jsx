import {
  PawPrintIcon as Paw,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 flex items-center">
            <Paw className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">PetVetCare</span>
          </div>
          <div className="flex flex-row  items-center justify-center gap-6">
            <a
              href="https://wa.me/59899693669?text=¡Hola!%20Quiero%20más%20información%20sobre%20PetVetCare"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300  inline-flex items-center"
            >
              <span>Contactar por WhatsApp</span>
            </a>
            <a
              href=""
              className="hover:text-blue-200 flex flex-row gap-2 transition-colors duration-300"
            >
              Instagram
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 ZooDevelopment. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
