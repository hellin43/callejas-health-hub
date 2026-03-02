

# Clínica de Fisioterapia Javier Callejas — Plan de Implementación

## Diseño y Tema
- Paleta clínica: blancos, grises claros, azul médico (#0EA5E9 sky-500) como color primario, con acentos en verde agua (#14B8A6 teal-500)
- Tipografía limpia y profesional, bordes redondeados suaves
- Animaciones fade-in-up al hacer scroll (CSS puro con Intersection Observer para rendimiento óptimo)
- Hover en tarjetas y botones: translate-y-1 + shadow-lg

## Componentes Globales

### Navbar (Sticky)
- Logo "Clínica Javier Callejas" a la izquierda
- Enlaces: Inicio, Servicios, Equipo
- Derecha: Iconos Instagram y Facebook + botón destacado "Pedir Cita"
- Menú hamburguesa en móvil

### Footer
- Enlaces rápidos, datos de contacto
- © 2026 Clínica Javier Callejas
- Crédito: "Web realizada por Hellín360" con enlace externo

### Botón WhatsApp Flotante
- Fijo abajo-derecha, enlace a wa.me con mensaje predefinido

## Páginas

### 1. Inicio (/)
- **Hero**: título "Recupera tu movilidad y dile adiós al dolor en Hellín", subtítulo, dos botones (Reservar Cita / Ver Servicios)
- **Ventajas**: 3 columnas con iconos — Atención Personalizada, Tecnología Avanzada, Sin Esperas
- **Sección Reservas**: 2 tarjetas — "Primera Consulta" y "Consulta Sucesiva" con enlaces a cal.com

### 2. Servicios (/servicios)
- Grid de 4 tarjetas con imágenes de Unsplash: Terapia Manual, Fisioterapia Deportiva, Rehabilitación Post-Operatoria, Punción Seca

### 3. Equipo (/equipo)
- 2 perfiles con foto, nombre, número de colegiado y descripción profesional

### 4. Legal (/legal)
- 3 secciones ancladas: Aviso Legal, Política de Privacidad, Política de Cookies con textos RGPD básicos

## Técnico
- React Router DOM para navegación SPA
- HTML semántico (header, main, section, article)
- Imágenes con loading="lazy" y alt descriptivos
- Animaciones con CSS + Intersection Observer (sin framer-motion para máximo rendimiento)
- Scroll suave entre secciones
- Totalmente responsive

