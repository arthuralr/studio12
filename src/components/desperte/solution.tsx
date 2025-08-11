import Image from "next/image";

export function TheSolution() {
  return (
    <section className="py-20 sm:py-28 bg-[#2B212E]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-mystic text-4xl md:text-5xl font-bold text-[#5C4B99] mb-6">
              O Sagrado Feminino não precisa ser buscado. Só lembrado.
            </h2>
            <p className="text-lg text-[#F4F4F7]/90 leading-relaxed">
              O e-book Desperte o Sagrado Feminino não é um guia para você se tornar algo novo. É um mapa com ferramentas práticas e amorosas para você se lembrar de tudo o que já é. Ele te guiará para transformar o cotidiano em um portal de magia e reconexão.
            </p>
          </div>
          <div>
            <Image
              src="https://gtiweb.site/imagem-paloma/p11.jpeg"
              alt="Cartas de oráculo e cristais"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl shadow-[#5C4B99]/20 w-full"
              data-ai-hint="oracle cards crystals"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
