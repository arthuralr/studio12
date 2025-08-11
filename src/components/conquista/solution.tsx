import Image from "next/image";

export function Solution() {
  return (
    <section className="py-20 sm:py-28 bg-grafite">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline_conquista text-4xl md:text-5xl font-black text-white_conquista mb-6">
            Imagine se você pudesse inverter o jogo.
          </h2>
          <p className="text-lg text-white_conquista/80 leading-relaxed font-body_conquista">
            O e-book O Jogo da Conquista é um guia prático com 7 passos testados para você fazer qualquer pessoa sentir uma conexão magnética. Não é um manual de 'dicas de paquera', mas um dossiê com os exatos gatilhos psicológicos que despertam interesse, desejo e fazem a pessoa querer estar ao seu lado.
          </p>
        </div>
      </div>
    </section>
  );
}