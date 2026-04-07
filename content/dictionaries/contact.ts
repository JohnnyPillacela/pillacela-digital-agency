import type { ContactDict } from "@/types/dictionary"

export const contactDict = {
    en: {
        title: "Contact Us",
        description:
            "Whether you pour concrete, pour coffee, or run the register — if you want a stronger online presence and SEO that matches how people look for local businesses, we’re listening. No need to match a checklist: describe your company, your town, and anything specific you want built or fixed. We’ll reply with ideas, not a canned pitch.",
        cta: "Send a message",
        ctaHref: "#contact",
    } satisfies ContactDict,
    es: {
        title: "Contáctanos",
        description:
            "Ya sea que viertas concreto, café o atiendas el mostrador — si quieres una presencia en línea más sólida y SEO alineado con cómo buscan los negocios locales, te escuchamos. No hace falta encajar en una lista: describe tu empresa, tu zona y lo específico que quieras construir o arreglar. Respondemos con ideas, no con discurso repetido.",
        cta: "Enviar mensaje",
        ctaHref: "#contact",
    } satisfies ContactDict,
} as const
