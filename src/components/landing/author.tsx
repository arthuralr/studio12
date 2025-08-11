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
                src="https://gtiweb.site/imagem-paloma/p1.jpeg"
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
                Paloma é mentora de reprogramação mental e criadora do método UPLOUD MENTAL. Com mais de uma década dedicada ao estudo da mente humana, ela desenvolveu um sistema único que combina neurociência, psicologia comportamental e técnicas de transformação pessoal.  Através do UPLOUD MENTAL, já ajudou milhares de mulheres a desinstalarem padrões limitantes e criarem uma vida alinhada à sua essência autêntica. Sua missão é ensinar que você tem o poder de reprogramar sua própria realidade.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
