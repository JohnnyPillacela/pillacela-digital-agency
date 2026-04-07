import type { ServicesDict } from "@/types/dictionary"

export const servicesDict = {
    en: {
        title: "Our Services",
        heroTitle: "What we offer",
        description:
            "Everything here is a starting point. Local construction crews, bakeries, shops, and service businesses are our wheelhouse — but if you need something tailored, say so. We’re not here to force a package that doesn’t fit.",
        items: [
            "Online presence for local businesses — deeper than a digital business card",
            "SEO & local search — show up when people look for what you do",
            "Fast, mobile-friendly builds with the latest web technologies",
            "Landing pages & multi-page sites for trades, retail, and pros",
            "Have a specific build in mind? Ask — we’ll figure it out together",
        ],
        cta: "Book a Consultation",
        ctaHref: "#contact",
    } satisfies ServicesDict,
    es: {
        title: "Nuestros Servicios",
        heroTitle: "Qué ofrecemos",
        description:
            "Todo esto es punto de partida. Oficios locales, panaderías, tiendas y servicios son nuestro terreno — pero si necesitas algo a medida, dilo. No estamos para imponer un paquete que no calce.",
        items: [
            "Presencia en línea para negocios locales — más profunda que una tarjeta digital",
            "SEO y búsqueda local — aparece cuando buscan lo que haces",
            "Sitios rápidos y móviles con las últimas tecnologías web",
            "Landing pages y sitios multipágina para oficios, retail y profesionales",
            "¿Algo específico en mente? Pregunta — lo vemos juntos",
        ],
        cta: "Reservar Consulta",
        ctaHref: "#contact",
    } satisfies ServicesDict,
} as const
