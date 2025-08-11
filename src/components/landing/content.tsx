import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const days = [
  { day: 1, title: "O Compromisso Público", description: "A força de tornar suas metas públicas para não desistir." },
  { day: 2, title: "O Poder do Porquê", description: "Descubra a motivação real e inabalável por trás dos seus sonhos." },
  { day: 3, title: "Torne Mais Fácil", description: "Como preparar seu ambiente para que a disciplina seja o caminho mais simples." },
  { day: 4, title: "Recompensas Estratégicas", description: "Treine seu cérebro para amar o processo e se manter motivada." },
  { day: 5, title: "A Regra dos Não Negociáveis", description: "Crie regras que eliminam a necessidade de motivação diária." },
  { day: 6, title: "Supere as Desculpas", description: "Aprenda a vencer a autossabotagem antes mesmo que ela comece." },
  { day: 7, title: "Sua Nova Identidade", description: "Deixe de ser alguém que 'tenta' e se torne alguém que 'faz'." },
];

export function Content() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-12">
          Uma Jornada de Transformação em 7 Dias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {days.map((item, index) => (
            <Card key={item.day} className={`transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ${index === days.length -1 ? 'lg:col-start-2 xl:col-start-auto' : ''} animate-fade-in-up`} style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}>
              <CardHeader>
                <CardTitle className="text-primary font-bold">Dia {item.day}</CardTitle>
                <h3 className="font-headline text-xl text-foreground pt-2">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
