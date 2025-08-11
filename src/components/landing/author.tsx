import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Author() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-3 items-center">
            <div className="md:col-span-1">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Paloma Martins"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="author portrait"
              />
            </div>
            <div className="md:col-span-2 p-8 md:p-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
                Conheça quem vai te guiar
              </h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">Paloma Martins</h3>
              <p className="text-muted-foreground leading-relaxed">
                Paloma Martins é atleta de mentalidade, empreendedora e especialista em Psicologia Esportiva. Apaixonada pelo comportamento humano e por alta performance, ela já ajudou mais de 20 mil alunos a mudarem seus hábitos. Paloma acredita que o sucesso vem do 'compromisso diário com a versão mais elevada de si mesmo' e criou este método para provar que qualquer pessoa pode alcançar uma vida com mais propósito e disciplina.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
