import Image from "next/image";

export function Solution() {
  return (
    <section className="py-20 sm:py-28 bg-grafite">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="font-headline_conquista text-4xl md:text-5xl font-black text-white_conquista mb-6">
              Imagine se você pudesse inverter o jogo.
            </h2>
            <p className="text-lg text-white_conquista/80 leading-relaxed font-body_conquista">
              O e-book O Jogo da Conquista é um guia prático com 7 passos testados para você fazer qualquer pessoa sentir uma conexão magnética. Não é um manual de 'dicas de paquera', mas um dossiê com os exatos gatilhos psicológicos que despertam interesse, desejo e fazem a pessoa querer estar ao seu lado.
            </p>
          </div>
          <div>
            <Image
              src="https://gtiweb.site/imagem-paloma/p13.jpeg"
              alt="Casal sorrindo e conectado"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl shadow-vermelho-intenso/10 w-full"
              data-ai-hint="couple smiling"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
