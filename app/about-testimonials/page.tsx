import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ContactSection } from "@/sections/Contact";

export default function AboutTestimonialsPage() {
  return (
    <div>
      <Header />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
