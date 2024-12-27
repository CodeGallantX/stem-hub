import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-yellow-700 text-white min-h-screen font-outfit">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}