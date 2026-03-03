import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
}

export function useSeo({ title, description, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    if (jsonLd) {
      const id = "json-ld-seo";
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
      return () => {
        script?.remove();
      };
    }
  }, [title, description, jsonLd]);
}
