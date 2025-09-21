import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Leadership } from "./components/Leadership";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}
