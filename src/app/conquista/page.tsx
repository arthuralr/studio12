import { Header } from "@/components/conquista/header";
import { Hero } from "@/components/conquista/hero";
import { Problem } from "@/components/conquista/problem";
import { Solution } from "@/components/conquista/solution";
import { Method } from "@/components/conquista/method";
import { Offer } from "@/components/conquista/offer";
import { Faq } from "@/components/conquista/faq";
import { Author } from "@/components/conquista/author";
import { Footer } from "@/components/conquista/footer";
import './theme.css';

export default function ConquistaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-grafite text-white_conquista font-sans_conquista">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Method />
        <Offer />
        <Faq />
        <Author />
      </main>
      <Footer />
    </div>
  );
}
