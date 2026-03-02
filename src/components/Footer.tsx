import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-bold mb-3">Clínica Javier Callejas</h3>
            <p className="text-sm opacity-80">
              Fisioterapia avanzada y personalizada en Hellín. Recupera tu movilidad y bienestar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">
              Enlaces
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">Inicio</Link></li>
              <li><Link to="/servicios" className="opacity-80 hover:opacity-100 transition-opacity">Servicios</Link></li>
              <li><Link to="/equipo" className="opacity-80 hover:opacity-100 transition-opacity">Equipo</Link></li>
              <li><Link to="/legal" className="opacity-80 hover:opacity-100 transition-opacity">Aviso Legal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📍 Hellín, Albacete</li>
              <li>📞 609 352 827</li>
              <li>📧 info@clinicajaviercallejas.es</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center text-xs opacity-60">
          <p>© 2026 Clínica Javier Callejas. Todos los derechos reservados.</p>
          <p className="mt-1">
            Web realizada por{" "}
            <a
              href="https://hellin360.es"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 transition-opacity"
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
