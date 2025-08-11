import Link from 'next/link';
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-vermelho-intenso/20 bg-grafite/80 backdrop-blur-sm">
      <div className="container h-20 flex items-center justify-between mx-auto px-4">
        <Link href="/conquista" className="font-headline_conquista text-3xl font-bold text-white_conquista">
          O Jogo da Conquista
        </Link>
        <Link
          href="#oferta"
          className={cn(buttonVariants({ variant: 'default' }), 'hidden sm:flex bg-vermelho-intenso text-white_conquista hover:bg-vermelho-intenso/90')}
        >
          DOMINAR O JOGO
        </Link>
      </div>
    </header>
  );
}