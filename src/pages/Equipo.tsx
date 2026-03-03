import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useSeo } from "@/hooks/use-seo";

const equipo = [
  {
    name: "Javier Callejas",
    role: "Fisioterapeuta y Director",
    colegiado: "Colegiado Nº 1234",
    desc: "Especialista en terapia manual y readaptación deportiva con más de 10 años de experiencia clínica. Su objetivo es encontrar el origen del problema, no solo tratar el síntoma.",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "María González",
    role: "Fisioterapeuta Especializada",
    colegiado: "Colegiada Nº 5678",
    desc: "Experta en rehabilitación post-operatoria y punción seca. Apasionada por el cuidado del paciente y la recuperación funcional.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  },
];

const Equipo = () => {
  const scrollRef = useScrollAnimation();
  useSeo({
    title: "Conoce a nuestro equipo de Fisioterapeutas | Clínica Javier Callejas",
    description: "Conoce a los fisioterapeutas de la Clínica Javier Callejas en Hellín. Profesionales especializados en terapia manual y rehabilitación.",
  });

  return (
    <div ref={scrollRef}>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="fade-in-up font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Conoce a nuestros profesionales
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {equipo.map((p, i) => (
              <Card
                key={i}
                className="fade-in-up text-center rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <CardHeader className="items-center">
                  <img
                    src={p.img}
                    alt={`Foto de ${p.name}`}
                    loading="lazy"
                    className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-primary/20"
                  />
                  <CardTitle className="text-xl">{p.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{p.role}</CardDescription>
                  <span className="text-xs font-semibold text-secondary">{p.colegiado}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipo;
