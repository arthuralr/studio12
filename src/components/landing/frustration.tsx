import Image from "next/image";

export function Frustration() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              Lembra daquela sensação de meta cumprida?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Imagine a satisfação de chegar ao fim de um ciclo com todas as suas promessas realizadas. Aquele sentimento de orgulho e a certeza de que você está no controle. Com um método claro e prático, essa sensação pode se tornar sua nova realidade. Não é sobre força de vontade, é sobre ter o sistema certo para o seu sucesso.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8bWV0YXxlbnwwfHx8fDE3NTQ5MDkzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mulher feliz e realizada"
              width={600}
              height={401}
              className="rounded-lg shadow-xl w-full"
              data-ai-hint="happy woman"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
