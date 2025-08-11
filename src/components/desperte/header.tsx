import Link from 'next/link';
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#5C4B99]/20 bg-[#2B212E]/80 backdrop-blur-sm">
      <div className="container h-20 flex items-center justify-between mx-auto px-4">
        <Link href="/desperte" className="font-mystic text-3xl font-bold text-[#F4F4F7]">
          Desperte o Sagrado Feminino
        </Link>
        <Link 
          href="#oferta"
          className={cn(buttonVariants({ variant: 'outline' }), 'hidden sm:flex border-ametista text-ametista hover:bg-ametista hover:text-white_lunar bg-transparent')}
          style={{ '--color-ametista': '#5C4B99', '--color-white_lunar': '#F4F4F7' } as React.CSSProperties}
        >
          INICIAR MINHA JORNADA
        </Link>
      </div>
    </header>
  );
}
