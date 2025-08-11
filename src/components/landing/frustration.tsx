import Image from "next/image";

export function Frustration() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              Você se identifica com isso?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Todo começo de ano é a mesma coisa: você faz uma lista de promessas, começa animada, mas a vida acontece, as desculpas surgem e, quando percebe, nada mudou. A culpa e a sensação de que 'o problema é você' tomam conta. E se eu te dissesse que o problema não é sua força de vontade, mas a falta de um método?
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmcnVzdHJhZG98ZW58MHx8fHwxNzU0OTA3NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mulher pensativa olhando pela janela"
              width={600}
              height={401}
              className="rounded-lg shadow-xl w-full"
              data-ai-hint="frustrated woman"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
