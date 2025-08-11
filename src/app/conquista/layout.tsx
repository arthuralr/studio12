import type {Metadata} from 'next';
import '../globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'O Jogo da Conquista',
  description: 'Aprenda a como seduzir qualquer pessoa em 7 passos.',
};

export default function ConquistaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
