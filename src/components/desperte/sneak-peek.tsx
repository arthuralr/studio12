import Image from "next/image";

export function SneakPeek() {
  return (
    <section className="py-20 sm:py-28 bg-[#2B212E]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-mystic text-4xl md:text-5xl font-bold text-[#5C4B99] mb-12">
          Veja a beleza que te espera
        </h2>
        <Image
          src="https://gtiweb.site/imagem-paloma/mockup-desperte.png"
          alt="Mockup do e-book Desperte o Sagrado Feminino"
          width={1000}
          height={600}
          className="rounded-lg shadow-2xl shadow-[#5C4B99]/20 mx-auto"
          data-ai-hint="ebook mockup pages"
        />
      </div>
    </section>
  );
}
