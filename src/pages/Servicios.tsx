import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const servicios = [
  {
    title: "Terapia Manual y Osteopatía",
    desc: "Tratamiento directo con las manos para liberar bloqueos articulares, aliviar contracturas musculares y mejorar la movilidad general. Ideal para lumbalgias y cervicalgias.",
    img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop",
  },
  {
    title: "Fisioterapia Deportiva",
    desc: "Prevención y tratamiento de lesiones deportivas. Aceleramos tu recuperación de esguinces, roturas fibrilares y sobrecargas para que vuelvas a entrenar cuanto antes.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
  },
  {
    title: "Rehabilitación Post-Operatoria",
    desc: "Acompañamiento integral tras cirugías (prótesis, ligamentos). Recuperamos la fuerza y el rango de movimiento de forma segura y progresiva.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    title: "Punción Seca y Neuromodulación",
    desc: "Técnicas invasivas avanzadas altamente efectivas para desactivar puntos gatillo y tratar dolores crónicos y musculares profundos.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
  },
];

const Servicios = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="fade-in-up font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nuestras Especialidades
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicios.map((s, i) => (
              <Card
                key={i}
                className="fade-in-up overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
