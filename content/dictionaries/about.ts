import type { AboutDict } from "@/types/dictionary"

export const aboutDict = {
    en: {
        title: "About Us",
        tagline: "Local businesses. Real presence.",
        description:
            "Pillacela Solutions exists for the crews, kitchens, counters, and corners that keep communities running. We build online presences that do real work — credibility, services, hours, proof, and calls — layered with SEO so neighbors and new customers can find you. It’s more than looking legit; it’s being findable and useful when someone pulls out their phone on the sidewalk.",
        highlights: [
            "Built for local trades, retail, food, and service businesses — not generic “startup” fluff",
            "An online presence that goes past a digital business card: story, trust, and search visibility",
            "Latest web technologies and SEO — structured so Google and maps can actually help you",
            "Tell us what you need; we’ll shape a path that fits your shop, not a one-size script",
            "Bilingual English & Spanish — how many of your customers actually browse",
        ],
        cta: "Tell us about your business",
        ctaHref: "#contact",
    } satisfies AboutDict,
    es: {
        title: "Sobre Nosotros",
        tagline: "Negocios locales. Presencia real.",
        description:
            "Pillacela Solutions está para las cuadrillas, cocinas, mostradores y rincones que mantienen vivos los barrios. Creamos presencias en línea que trabajan de verdad — credibilidad, servicios, horarios, pruebas y llamadas — con SEO para que vecinos y clientes nuevos te encuentren. Es más que verse bien: es ser útil y localizable cuando alguien saca el teléfono en la acera.",
        highlights: [
            "Pensado para oficios locales, retail, comida y servicios — no humo de “startup” genérico",
            "Presencia online que va más allá de la tarjeta digital: historia, confianza y visibilidad en búsqueda",
            "Últimas tecnologías web y SEO — estructurado para que Google y mapas te ayuden de verdad",
            "Cuéntanos qué necesitas; armamos un camino que encaje con tu negocio, no un guion único",
            "Bilingüe inglés y español — como buscan muchos de tus clientes",
        ],
        cta: "Cuéntanos sobre tu negocio",
        ctaHref: "#contact",
    } satisfies AboutDict,
} as const
