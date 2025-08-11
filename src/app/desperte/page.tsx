import { Author } from "@/components/desperte/author";
import { TheCall } from "@/components/desperte/call";
import { Header } from "@/components/desperte/header";
import { Hero } from "@/components/desperte/hero";
import { Offer } from "@/components/desperte/offer";
import { Portals } from "@/components/desperte/portals";
import { SneakPeek } from "@/components/desperte/sneak-peek";
import { TheSolution } from "@/components/desperte/solution";
import { Footer } from "@/components/desperte/footer";
import { Faq } from "@/components/desperte/faq";
import { ImpactImage } from "@/components/desperte/impact-image";

export default function DespertePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#2B212E] text-[#F4F4F7] font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <TheCall />
        <TheSolution />
        <Portals />
        <SneakPeek />
        <Offer />
        <Author />
        <Faq />
        <ImpactImage />
      </main>
      <Footer />
    </div>
  );
}
