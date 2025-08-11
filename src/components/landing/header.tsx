import Link from 'next/link';
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center justify-between mx-auto px-4">
        <Link href="/" className="font-headline text-2xl font-bold text-foreground">
          Coloque aqui o nome do ebook
        </Link>
        <Link 
          href="#oferta"
          className={cn(buttonVariants({ variant: 'default' }), 'hidden sm:flex shadow-sm')}
        >
          QUERO MEU E-BOOK
        </Link>
      </div>
    </header>
  );
}
