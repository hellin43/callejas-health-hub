import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useSeo } from "@/hooks/use-seo";

const sections = [
  {
    id: "aviso-legal",
    title: "Aviso Legal",
    content:
      "En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa que este sitio web es titularidad de Clínica de Fisioterapia Javier Callejas, con domicilio en Hellín (Albacete). El acceso y uso de este sitio web implica la aceptación plena de las condiciones aquí establecidas. El titular no se responsabiliza del mal uso que pueda hacerse de los contenidos, reservándose el derecho a actualizarlos o modificarlos en cualquier momento.",
  },
  {
    id: "politica-privacidad",
    title: "Política de Privacidad",
    content:
      "De conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales, le informamos de que los datos personales recabados a través de los formularios de este sitio web serán tratados con la finalidad de gestionar su solicitud de información o cita. Los datos no serán cedidos a terceros salvo obligación legal. Puede ejercer sus derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición escribiéndonos a info@clinicajaviercallejas.es.",
  },
  {
    id: "politica-cookies",
    title: "Política de Cookies",
    content:
      "Este sitio web utiliza únicamente cookies técnicas y esenciales para garantizar el correcto funcionamiento de la navegación. No se utilizan cookies de seguimiento, publicidad ni analítica de terceros. Al navegar por este sitio, acepta el uso de estas cookies esenciales. Puede configurar su navegador para rechazar cookies, aunque esto podría afectar a la funcionalidad del sitio.",
  },
];

const Legal = () => {
  const scrollRef = useScrollAnimation();
  useSeo({
    title: "Aviso Legal y Política de Privacidad | Clínica Javier Callejas",
    description: "Aviso legal, política de privacidad y política de cookies de la Clínica de Fisioterapia Javier Callejas en Hellín.",
  });

  return (
    <div ref={scrollRef}>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="fade-in-up font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Información Legal
          </h1>

          <nav className="fade-in-up mb-10 flex flex-wrap justify-center gap-4">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {s.title}
              </a>
            ))}
          </nav>

          <div className="space-y-12">
            {sections.map((s) => (
              <article key={s.id} id={s.id} className="fade-in-up scroll-mt-24">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
