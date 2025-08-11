import { Users } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="py-8 sm:py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-4 text-center">
          <Users className="h-10 w-10 text-primary" />
          <p className="text-lg md:text-xl font-semibold text-foreground">
            Junte-se a mais de <span className="font-bold text-primary">20 mil alunos</span> que já mudaram de hábitos com os métodos da Paloma.
          </p>
        </div>
      </div>
    </section>
  );
}
