import Link from 'next/link';
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black text-white backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container h-14 flex items-center justify-between mx-auto px-4">
        <Link href="/" className="font-headline text-2xl font-bold">
          7 Dias Para o SIM!
        </Link>
        <Link 
          href="#oferta"
          className={cn(buttonVariants({ variant: 'accent' }), 'hidden sm:flex shadow-sm')}
        >
          QUERO MEU E-BOOK
        </Link>
      </div>
    </header>
  );
}
