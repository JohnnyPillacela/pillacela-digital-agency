import type { HeroDict } from "@/types/dictionary"

export const heroDict = {
    en: {
        title: "Pillacela Solutions",
        subtitle:
            "We help local companies — contractors, bakeries, shops, and neighborhood names you’d recognize on the block — turn the web into a real asset. Not a fancy digital business card: a proper online presence that earns trust, answers questions, and shows up when people search.",
        sideContent:
            "If you run a local business, you deserve more than a template and a prayer. We build clear, fast sites on top of the latest web technologies, with SEO tuned for how your customers actually look you up — “near me,” maps, and Google. Have something specific in mind? We’re not married to a menu. Reach out, describe your shop or job site, and we’ll tell you honestly what fits.",
        cta: "Book a Consultation",
        ctaHref: "#contact",
        cta2: "Learn More",
        cta2Href: "#services",
        badge: "Software, Web Development &SEO",
    } satisfies HeroDict,
    es: {
        title: "Pillacela Solutions",
        subtitle:
            "Ayudamos a empresas locales — contratistas, panaderías, tiendas y negocios de barrio que sí se notan en la calle — a que la web sea un activo de verdad. No una tarjeta digital bonita: una presencia en línea que genera confianza, responde dudas y aparece cuando la gente busca.",
        sideContent:
            "Si tienes un negocio local, mereces más que una plantilla al azar. Armamos sitios claros y rápidos con las últimas tecnologías web y SEO pensado en cómo tus clientes te buscan — “cerca de mí,” mapas y Google. ¿Tienes algo específico en mente? No nos atamos a un menú fijo. Escríbenos, cuéntanos tu taller o tu local, y te decimos con franqueza qué encaja.",
        cta: "Reservar Consulta",
        ctaHref: "#contact",
        cta2: "Aprender Más",
        cta2Href: "#services",
        badge: "Software, Desarrollo Web & SEO",
    } satisfies HeroDict,
} as const
