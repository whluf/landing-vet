import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PetVetCare",
  description:
    "sistema de gestión de clínicas veterinarias, PetVetCare; es una aplicación web que permite a los veterinarios gestionar sus clínicas de forma eficiente, gestion de citas, historial de mascotas, facturación, etc. zoo development todos los derechos reservados",
  image: "https://petvetcare.vercel.app/paw.jpg",
  url: "https://petvetcare.vercel.app",
  type: "website",
  siteName: "PetVetCare",
  locale: "es",
  keywords:
    "PetVetCare, veterinaria, gestion de citas, historial de mascotas, facturación, control de inventario, recordatorios, informes detallados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
