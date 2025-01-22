import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Head>
        <title>PetVetCare - Sistema clínico y de gestión de veterinarias</title>
        <meta
          name="description"
          content="PetVetCare: Sistema integral para la gestión de clínicas veterinarias"
        />
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <Header />

      <main className="flex-grow ">
        <Hero />
        <Benefits />
        <Services />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
