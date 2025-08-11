import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { SocialProof } from '@/components/landing/social-proof';
import { Frustration } from '@/components/landing/frustration';
import { Solution } from '@/components/landing/solution';
import { Transformation } from '@/components/landing/transformation';
import { Content } from '@/components/landing/content';
import { Audience } from '@/components/landing/audience';
import { Author } from '@/components/landing/author';
import { Offer } from '@/components/landing/offer';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Frustration />
        <Solution />
        <Transformation />
        <Content />
        <Audience />
        <Author />
        <Offer />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
