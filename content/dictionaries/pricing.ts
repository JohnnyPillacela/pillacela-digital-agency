import type { PricingDict } from "@/types/dictionary"

export const pricingDict = {
    en: {
        title: "Simple, Transparent Pricing",
        description:
            "Starting points for local businesses — not a cage. If your build doesn’t fit a tier, tell us what you’re picturing and we’ll quote it fairly.",
        badge: "Pricing",
        tiers: [
            {
                name: "Tier 1",
                price: "$199",
                description:
                    "A focused single-page presence — enough to look legit, explain what you do, and start showing up in search.",
                features: [
                    "One-page website",
                    "English or Spanish (single language)",
                    "On-page SEO foundations",
                    "Mobile responsive",
                ],
                cta: "Get Started",
                ctaHref: "#contact",
            },
            {
                name: "Tier 2",
                price: "$499",
                description:
                    "A bilingual, multi-page site for shops and crews who need room to tell the full story — with SEO in both languages.",
                features: [
                    "Multi-page website",
                    "English + Spanish (bilingual)",
                    "SEO in both languages",
                    "Performance optimized",
                    "Contact form included",
                ],
                cta: "Get Started",
                ctaHref: "#contact",
                highlighted: true,
                badge: "Most Popular",
            },
            {
                name: "Tier 3",
                price: "From $1500",
                description:
                    "Custom scope for growing local brands — more pages, richer presence, or specific features. Describe what you need; we’ll map it.",
                features: [
                    "Custom multi-page or specialized build",
                    "Bilingual (English + Spanish)",
                    "Deeper SEO + analytics setup",
                    "CMS or content workflows when it fits",
                    "Priority support",
                ],
                cta: "Let's Talk",
                ctaHref: "#contact",
            },
        ],
    } satisfies PricingDict,
    es: {
        title: "Precios Simples y Transparentes",
        description:
            "Puntos de partida para negocios locales — no una jaula. Si tu proyecto no calza en un nivel, cuéntanos y cotizamos con sentido.",
        badge: "Precios",
        tiers: [
            {
                name: "Nivel 1",
                price: "$199",
                description:
                    "Presencia de una página enfocada — suficiente para verse serio, explicar tu oferta y empezar a aparecer en búsqueda.",
                features: [
                    "Sitio web de una página",
                    "Inglés o español (un solo idioma)",
                    "Bases de SEO en la página",
                    "Diseño adaptable a móviles",
                ],
                cta: "Comenzar",
                ctaHref: "#contact",
            },
            {
                name: "Nivel 2",
                price: "$499",
                description:
                    "Sitio bilingüe multipágina para locales y oficios que necesitan espacio para contar la historia completa — con SEO en ambos idiomas.",
                features: [
                    "Sitio web de varias páginas",
                    "Inglés + español (bilingüe)",
                    "SEO en ambos idiomas",
                    "Optimizado para rendimiento",
                    "Formulario de contacto incluido",
                ],
                cta: "Comenzar",
                ctaHref: "#contact",
                highlighted: true,
                badge: "Más Popular",
            },
            {
                name: "Nivel 3",
                price: "Desde $1500",
                description:
                    "Alcance a medida para marcas locales en crecimiento — más páginas, presencia más rica o funciones puntuales. Cuéntanos qué necesitas; lo mapeamos.",
                features: [
                    "Sitio multipágina personalizado o necesidades específicas",
                    "Bilingüe (inglés + español)",
                    "SEO más profundo + configuración de analítica",
                    "CMS o flujos de contenido cuando aplique",
                    "Soporte prioritario",
                ],
                cta: "Hablemos",
                ctaHref: "#contact",
            },
        ],
    } satisfies PricingDict,
} as const
