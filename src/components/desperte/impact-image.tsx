import Image from "next/image";

export function ImpactImage() {
  return (
    <section className="py-20 sm:py-28 bg-[#2B212E]">
      <div className="container mx-auto px-4">
        <div className="relative aspect-video max-h-[600px] mx-auto">
          <Image
            src="https://gtiweb.site/imagem-paloma/p5.jpeg"
            alt="Mulher em conexão com a natureza"
            fill
            className="rounded-lg shadow-2xl shadow-[#5C4B99]/20 object-cover"
            data-ai-hint="woman nature connection"
          />
        </div>
      </div>
    </section>
  );
}
