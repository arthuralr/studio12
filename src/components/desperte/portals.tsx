import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Droplet, Coffee, GitCompareArrows } from "lucide-react";

const portals = [
  {
    icon: <Droplet className="h-10 w-10 text-[#5C4B99]" />,
    title: "Rituais de Limpeza e Banhos Energéticos",
    description: "Aprenda a limpar seu campo energético e a usar o poder das ervas em banhos rituais para liberar memórias, abrir o coração e restaurar sua vitalidade.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-[#5C4B99]" />,
    title: "Cartas da Voz da Intuição",
    description: "Um oráculo com 30 mensagens canalizadas para você tirar diariamente e receber a direção exata que sua alma precisa ouvir.",
  },
  {
    icon: <Coffee className="h-10 w-10 text-[#5C4B99]" />,
    title: "Blends de Chás para Clareza",
    description: "Receitas de chás com ervas que acalmam a mente, ativam a intuição e abrem o campo para a meditação e o autoconhecimento.",
  },
  {
    icon: <GitCompareArrows className="h-10 w-10 text-[#5C4B99]" />,
    title: "Sabedoria do Equilíbrio (Yin & Yang)",
    description: "Entenda como equilibrar sua energia de ação (Yang) e de receptividade (Yin) para viver com mais plenitude e evitar o esgotamento.",
  },
];

export function Portals() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F4F7] text-[#2B212E]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mystic text-4xl md:text-5xl font-bold text-[#5C4B99] mb-4">
            O que você vai encontrar nesta jornada:
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portals.map((portal) => (
            <div key={portal.title} className="flex items-start space-x-6 p-4">
              <div className="flex-shrink-0 mt-1">{portal.icon}</div>
              <div>
                <h3 className="text-2xl font-bold font-mystic text-[#2B212E] mb-2">{portal.title}</h3>
                <p className="text-gray-700 leading-relaxed">{portal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
