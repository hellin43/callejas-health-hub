import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-background px-4">
    <div className="text-center max-w-md">
      <h1 className="font-display text-7xl md:text-8xl font-extrabold text-primary mb-4">
        404
      </h1>
      <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
        Página no encontrada
      </p>
      <p className="text-muted-foreground mb-8">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold btn-primary-glow"
      >
        ← Volver al inicio
      </Link>
    </div>
  </div>
);

export default NotFound;
