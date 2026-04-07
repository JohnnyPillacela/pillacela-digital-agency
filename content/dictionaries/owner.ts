import type { OwnerDict } from "@/types/dictionary"

export const ownerDict = {
    en: {
        name: "Johnny Pillacela",
        title: "Founder & Lead Developer",
        credibilityLine:
            "Former software engineer at Google and Amazon — background in large-scale systems and data; today I bring that same rigor to the web experiences I build for local businesses.",
        bio: "I started Pillacela Solutions because local businesses — the roofers, the bakeries, the shops on Main — deserve the same clarity and reach online that big brands take for granted. I build fast, bilingual sites that work as a real online presence: trust, SEO, and calls — not wallpaper. Got something specific in mind? Reach out; I’d rather talk it through than fit you into a box.",
        imageUrl: "",
        credentials: [
            "Based in Elizabeth, NJ",
            "Bilingual — English & Spanish",
            "7+ years in web development",
        ],
        cta: "Let's talk about your business",
        ctaHref: "#contact",
    } satisfies OwnerDict,
    es: {
        name: "Johnny Pillacela",
        title: "Fundador y Desarrollador Principal",
        credibilityLine:
            "Antes: ingeniero de software en Google y Amazon — experiencia en sistemas y datos a gran escala; hoy aplico ese rigor a las experiencias web que construyo para negocios locales.",
        bio: "Fundé Pillacela Solutions porque los negocios locales — techadores, panaderías, las tiendas de siempre — merecen la misma claridad y alcance en línea que dan por sentadas las grandes marcas. Construyo sitios rápidos y bilingües que funcionan como presencia real: confianza, SEO y llamadas — no decoración. ¿Algo específico en mente? Escríbeme; prefiero conversarlo a meterte en una casilla.",
        imageUrl: "",
        credentials: [
            "Basado en Elizabeth, NJ",
            "Bilingüe — Inglés y Español",
            "7+ años en desarrollo web",
        ],
        cta: "Hablemos de tu negocio",
        ctaHref: "#contact",
    } satisfies OwnerDict,
} as const
