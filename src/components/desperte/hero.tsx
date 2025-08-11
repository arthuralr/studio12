import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white_lunar">
      <Image
        src="https://gtiweb.site/imagem-paloma/p6.jpeg"
        alt="Mulher meditando em meio à energia cósmica"
        fill
        className="object-cover"
        priority
        data-ai-hint="woman meditating cosmos"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="font-mystic text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          Há uma força silenciosa dentro de você que nunca deixou de pulsar.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white_lunar/90 font-sans">
          Este é um convite para você silenciar o mundo, se reconectar com sua intuição e lembrar da mulher cíclica, sábia e poderosa que já habita em você.
        </p>
        <Link
          href="#oferta"
          className={cn(buttonVariants({ size: 'lg' }), 'bg-[#5C4B99] text-white_lunar hover:bg-[#4a3b80] text-lg font-bold shadow-lg transition-transform duration-300 hover:scale-105 rounded-full px-12 py-8')}
        >
          QUERO INICIAR MINHA JORNADA DE RECONEXÃO
        </Link>
        <p className="mt-4 text-sm text-white_lunar/80">
          Acesso imediato à sua essência.
        </p>
      </div>
    </section>
  );
}
