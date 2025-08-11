import Image from "next/image";

export function SneakPeek() {
  return (
    <section className="py-20 sm:py-28 bg-[#2B212E]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-mystic text-4xl md:text-5xl font-bold text-[#5C4B99] mb-12">
          Veja a beleza que te espera
        </h2>
        <Image
          src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8bXVsaGVyfGVufDB8fHx8MTc1NDkwMzE2MHww&ixlib=rb-4.1.0&q=80&w=1080"
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
