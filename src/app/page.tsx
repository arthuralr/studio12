import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Frustration } from '@/components/landing/frustration';
import { Solution } from '@/components/landing/solution';
import { Content } from '@/components/landing/content';
import { Author } from '@/components/landing/author';
import { Offer } from '@/components/landing/offer';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Frustration />
        <Solution />
        <Content />
        <Author />
        <Offer />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
