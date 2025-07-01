import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ContactForm } from "@/sections/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center items-center py-16">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
