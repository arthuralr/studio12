import Image from "next/image";

export function ImpactImage() {
  return (
    <section className="bg-[#2B212E] py-20 sm:py-28">
      <div className="container mx-auto flex justify-center px-4">
        <div className="w-full max-w-4xl">
          <Image
            src="https://gtiweb.site/imagem-paloma/p10.png"
            alt="Chamada para ação final"
            width={1200}
            height={800}
            className="h-auto w-full rounded-lg object-contain shadow-2xl shadow-[#5C4B99]/20"
            data-ai-hint="final call to action"
          />
        </div>
      </div>
    </section>
  );
}
