import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useSeo } from "@/hooks/use-seo";
import { User, Cpu, Clock, CalendarCheck, Star, Shield } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Clínica de Fisioterapia Javier Callejas",
  "telephone": "+34609352827",
  "url": "https://clinicajaviercallejas.es",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hellín",
    "addressRegion": "Albacete",
    "addressCountry": "ES"
  },
  "medicalSpecialty": "Physiotherapy",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "1000"
  }
};

const Index = () => {
  const scrollRef = useScrollAnimation();
  useSeo({
    title: "Fisioterapia en Hellín | Clínica Javier Callejas",
    description: "Recupera tu movilidad en Hellín. Fisioterapia avanzada, osteopatía y rehabilitación. Reserva tu cita online.",
    jsonLd,
  });

  return (
    <div ref={scrollRef}>
      <section className="relative overflow-hidden py-24 md:py-36">
        {/* Gradiente de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(213_94%_18%)] via-[hsl(213_94%_22%)] to-[hsl(215_60%_15%)]" />

        {/* Glow decorativo superior derecha */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[hsl(213_94%_50%/0.25)] blur-3xl pointer-events-none" />

        {/* Glow decorativo inferior izquierda */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[hsl(160_60%_40%/0.18)] blur-3xl pointer-events-none" />

        {/* Patrón de puntos sutil */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Chip / badge de confianza */}
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-xs md:text-sm font-medium mb-6">
            <Shield className="h-3.5 w-3.5 text-[hsl(160_60%_60%)]" />
            Clínica de referencia en Hellín · Albacete
          </div>

          <h1 className="fade-in-up font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white max-w-4xl mx-auto tracking-tight">
            Recupera tu movilidad y{" "}
            <span className="bg-gradient-to-r from-white to-[hsl(160_60%_75%)] bg-clip-text text-transparent">
              dile adiós al dolor
            </span>{" "}
            en Hellín
          </h1>

          <p className="fade-in-up mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            Tratamientos de fisioterapia avanzada y personalizada para que vuelvas
            a tu rutina sin molestias. Resultados desde la primera sesión.
          </p>

          {/* Botones con jerarquía clara */}
          <div className="fade-in-up mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="#reservas"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center
                px-8 py-4 rounded-xl
                bg-white text-[hsl(213_94%_28%)]
                font-semibold text-base
                shadow-[0_8px_30px_hsl(0_0%_100%_/_0.2)]
                hover:bg-white/95 hover:shadow-[0_12px_40px_hsl(0_0%_100%_/_0.3)]
                hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              Reservar Cita
            </a>
            <Link
              to="/servicios"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center
                px-8 py-4 rounded-xl
                bg-white/10 backdrop-blur-sm text-white
                font-semibold text-base
                border border-white/25
                hover:bg-white/15 hover:border-white/40
                transition-all duration-200
              "
            >
              Ver Servicios
            </Link>
          </div>

          {/* Social proof */}
          <div className="fade-in-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-white/90">5.0 en Google</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>Más de 1.000 pacientes recuperados en Hellín</span>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 md:py-24 bg-[hsl(var(--section-alt))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: "Atención 100% Personalizada",
                desc: "Valoramos tu caso al detalle para ofrecerte el tratamiento que realmente necesitas.",
              },
              {
                icon: Cpu,
                title: "Tecnología Avanzada",
                desc: "Usamos las mejores herramientas para acelerar tu recuperación de forma segura.",
              },
              {
                icon: Clock,
                title: "Sin Esperas",
                desc: "Reserva online y entra a tu hora exacta. Respetamos tu tiempo.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="fade-in-up text-center border-none rounded-2xl bg-card card-elevated"
              >
                <CardHeader className="items-center pb-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-2">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reservas */}
      <section id="reservas" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="fade-in-up font-display text-3xl md:text-4xl font-bold text-foreground">
            Reserva tu sesión en menos de 1 minuto
          </h2>
          <p className="fade-in-up mt-4 text-muted-foreground max-w-2xl mx-auto">
            Contamos con dos fisioterapeutas profesionales, lo que nos permite ofrecerte gran disponibilidad (2 huecos cada media hora). Elige tu tratamiento y asegura tu cita con pago online 100% seguro.
          </p>

          <div className="fade-in-up mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                title: "Primera Consulta Fisioterapia",
                url: "https://cal.com/hellin360/primera-consulta-fisioterapia",
                highlighted: true,
              },
              {
                title: "Consulta Sucesiva",
                url: "https://cal.com/hellin360/consulta-fisioterapia",
                highlighted: false,
              },
            ].map((item, i) => (
              <Card
                key={i}
                className={`fade-in-up relative rounded-2xl bg-card card-elevated ${item.highlighted ? "border-2 border-blue-600" : ""}`}
              >
                {item.highlighted && (
                  <Badge className="absolute -top-3 right-4 bg-blue-600 text-white hover:bg-blue-700">
                    Nuevos Pacientes
                  </Badge>
                )}
                <CardHeader className="items-center">
                  <CalendarCheck className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full shadow-lg">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      Reservar Ahora
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
