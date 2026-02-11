import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Modules } from "@/components/landing/Modules";
import { Pricing } from "@/components/landing/Pricing";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
      <Modules />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;