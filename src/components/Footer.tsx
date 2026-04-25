import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))]">
      {/* Línea superior decorativa */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-bold mb-3 text-white">
              Clínica Javier Callejas
            </h3>
            <p className="text-sm leading-relaxed mb-5">
              Fisioterapia avanzada y personalizada en Hellín. Recupera tu movilidad y bienestar.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xs font-semibold mb-4 uppercase tracking-wider text-white/90">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Inicio" },
                { to: "/servicios", label: "Servicios" },
                { to: "/equipo", label: "Equipo" },
                { to: "/legal", label: "Aviso Legal" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display text-xs font-semibold mb-4 uppercase tracking-wider text-white/90">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <span aria-hidden>📍</span>
                <span>Hellín, Albacete</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden>📞</span>
                <a href="tel:+34609352827" className="hover:text-white transition-colors">
                  609 352 827
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden>📧</span>
                <a
                  href="mailto:info@clinicajaviercallejas.es"
                  className="hover:text-white transition-colors break-all"
                >
                  info@clinicajaviercallejas.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <p>© 2026 Clínica Javier Callejas. Todos los derechos reservados.</p>
          <p>
            Web realizada por{" "}
            <a
              href="https://hellin360.es"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/60 transition-colors"
            >
              Hellín360
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
