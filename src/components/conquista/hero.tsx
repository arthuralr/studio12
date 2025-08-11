import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center text-center text-white_conquista">
      <Image
        src="https://gtiweb.site/imagem-paloma/p12.webp"
        alt="Tabuleiro de xadrez simbolizando estratégia"
        layout="fill"
        className="object-cover"
        priority
        data-ai-hint="chessboard game"
      />
      <div className="absolute inset-0 bg-grafite/70" />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="font-headline_conquista text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          Quantas vezes você gostou de alguém, mas acabou sendo ignorado(a)?
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white_conquista/90 font-body_conquista">
          A verdade é que a conquista não é sorte. É um jogo psicológico. Se você não souber as regras, vai continuar sendo visto(a) apenas como "legalzinho(a)".
        </p>
        <Link
          href="#oferta"
          className={cn(buttonVariants({ size: 'lg' }), 'bg-vermelho-intenso text-white_conquista hover:bg-vermelho-intenso/90 text-lg font-bold shadow-lg shadow-vermelho-intenso/20 transition-transform duration-300 hover:scale-105 rounded-md px-12 py-8')}
        >
          QUERO DOMINAR O JOGO DA CONQUISTA
        </Link>
        <p className="mt-4 text-sm text-white_conquista/80 font-body_conquista">
          Aprenda os 7 passos para se tornar irresistível.
        </p>
      </div>
    </section>
  );
}
