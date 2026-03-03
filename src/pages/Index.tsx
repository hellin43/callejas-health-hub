import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { User, Cpu, Clock, CalendarCheck, Star } from "lucide-react";

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <Helmet>
        <title>Fisioterapia en Hellín | Clínica Javier Callejas</title>
        <meta name="description" content="Recupera tu movilidad en Hellín. Fisioterapia avanzada, osteopatía y rehabilitación. Reserva tu cita online." />
        <link rel="canonical" href="https://clinicajaviercallejas.es/" />
        <script type="application/ld+json">{JSON.stringify({
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
        })}</script>
      </Helmet>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/40 opacity-90" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="fade-in-up font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl mx-auto">
            Recupera tu movilidad y dile adiós al dolor en Hellín
          </h1>
          <p className="fade-in-up mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Tratamientos de fisioterapia avanzada y personalizada para que vuelvas a tu rutina sin molestias. Resultados desde la primera sesión.
          </p>
          <div className="fade-in-up mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base shadow-xl bg-blue-600 hover:bg-blue-700 text-white">
              <a href="#reservas">Reservar Cita</a>
            </Button>
            <Button asChild size="lg" className="text-base shadow-xl bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/servicios">Ver Servicios</Link>
            </Button>
          </div>
          <div className="fade-in-up mt-6 flex items-center justify-center gap-1 text-white/80">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm">Más de 1.000 pacientes recuperados en Hellín</span>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 md:py-24 bg-slate-50">
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
                className="fade-in-up text-center border-none rounded-2xl shadow-xl bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
                className={`relative rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${item.highlighted ? "border-2 border-blue-600" : ""}`}
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
