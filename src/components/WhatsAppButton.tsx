import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34609352827?text=Hola,%20quiero%20información%20sobre%20las%20citas."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp para pedir cita"
      className="
        fixed z-50
        bottom-[max(1rem,env(safe-area-inset-bottom))]
        right-[max(1rem,env(safe-area-inset-right))]
        inline-flex items-center gap-2
        bg-[#22c55e] hover:bg-[#16a34a] active:bg-[#15803d]
        text-white font-semibold
        text-sm
        h-12 pl-3.5 pr-4
        sm:h-12 sm:pl-4 sm:pr-5
        rounded-full
        whatsapp-pulse
        shadow-[0_4px_20px_hsl(142_70%_45%_/_0.45)]
        hover:shadow-[0_6px_28px_hsl(142_70%_45%_/_0.6)]
        hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#22c55e]
        transition-all duration-200
        motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:[animation:none]
      "
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden xs:inline sm:inline">Pedir cita</span>
    </a>
  );
};

export default WhatsAppButton;
