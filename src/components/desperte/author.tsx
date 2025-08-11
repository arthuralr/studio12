import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Author() {
  return (
    <section className="py-20 sm:py-28 bg-[#2B212E]">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-lg bg-black/20 border-[#5C4B99]/20 rounded-2xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="md:col-span-1">
              <Image
                src="https://gtiweb.site/imagem-paloma/p5.jpeg"
                alt="Paloma Martins"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                data-ai-hint="author portrait wild"
              />
            </div>
            <div className="md:col-span-1 p-8 md:p-12">
              <h2 className="font-mystic text-4xl md:text-5xl font-bold text-[#F4F4F7] mb-4">
                Sobre a Autora
              </h2>
              <h3 className="text-3xl font-semibold text-[#5C4B99] mb-6 font-mystic">Paloma Martins</h3>
              <p className="text-[#F4F4F7]/90 leading-relaxed font-sans">
                Após guiar mais de 20 mil pessoas em jornadas de disciplina e movimento, Paloma Martins agora te convida para um mergulho interno. Com a sensibilidade de quem entende que a mente precisa de movimento, mas a alma precisa de presença, ela criou este guia como um ato de serviço a todas as mulheres que desejam se lembrar de seu poder inato.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
