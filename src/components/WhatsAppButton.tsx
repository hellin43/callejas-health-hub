import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34609352827?text=Hola,%20quiero%20información%20sobre%20las%20citas."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-2.5
        bg-[#22c55e] hover:bg-[#16a34a]
        text-white font-semibold text-sm
        pl-4 pr-5 py-3.5
        rounded-full
        whatsapp-pulse
        shadow-[0_4px_20px_hsl(142_70%_45%_/_0.45)]
        hover:shadow-[0_6px_28px_hsl(142_70%_45%_/_0.6)]
        hover:-translate-y-0.5
        transition-all duration-200
        md:pl-5 md:pr-6
      "
    >
      <MessageCircle className="h-5 w-5" />
      <span>Pedir cita</span>
    </a>
  );
};

export default WhatsAppButton;
