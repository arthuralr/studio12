import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Author() {
  return (
    <section className="py-20 sm:py-28 bg-grafite">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="overflow-hidden shadow-2xl bg-white_conquista border-vermelho-intenso/30 text-grafite rounded-lg">
          <div className="grid md:grid-cols-3 items-center">
            <div className="md:col-span-1">
              <Image
                src="https://gtiweb.site/imagem-paloma/p11.jpeg"
                alt="Paloma Martins, especialista em reprogramação mental"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="author portrait"
              />
            </div>
            <div className="md:col-span-2 p-8 md:p-12">
              <h2 className="font-headline_conquista text-3xl md:text-4xl font-black text-grafite mb-4">
                Quem vai te guiar neste jogo?
              </h2>
              <h3 className="text-2xl font-bold text-vermelho-intenso mb-4 font-headline_conquista">Paloma Martins</h3>
              <p className="font-body_conquista text-grafite/90 leading-relaxed">
                Paloma é mentora de reprogramação mental e já ajudou milhares de pessoas a destravar o poder da mente para criar a realidade que desejam. Aplicando seu conhecimento sobre comportamento humano, ela desenvolveu este guia para mostrar que a conquista não é sobre sorte, mas sobre entender a psicologia por trás da atração e usar as ferramentas certas para se tornar irresistível.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
