import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhY2hpZXZlbWVudHxlbnwwfHx8fDE3NTU3MjIwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Mulher celebrando uma conquista ao ar livre"
        fill
        className="object-cover"
        priority
        data-ai-hint="woman achievement"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
          Chega de Promessas Não Cumpridas.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
          Aprenda o método prático para construir uma rotina inteligente, vencer a autossabotagem e finalmente dizer SIM para os seus maiores objetivos. Tudo isso em apenas 7 dias.
        </p>
        <Link
          href="#oferta"
          className={cn(buttonVariants({ size: 'lg' }), 'text-lg font-bold shadow-lg transition-transform duration-300 hover:scale-105')}
        >
          QUERO TRANSFORMAR MINHAS PROMESSAS EM REALIDADE
        </Link>
        <p className="mt-4 text-sm text-white/80">
          Oferta especial por apenas R$37,00.
        </p>
      </div>
    </section>
  );
}
