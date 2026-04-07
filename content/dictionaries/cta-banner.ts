import type { CtaBannerDict } from "@/types/dictionary"

export const ctaBannerDict = {
    en: {
        title: "Ready for an online presence that works?",
        description:
            "Local businesses deserve more than a placeholder on the web. Tell us about your crew, your kitchen, or your storefront — and what you want people to do when they find you. We’ll go from there.",
        cta: "Book a Consultation",
        ctaHref: "#contact",
    } satisfies CtaBannerDict,
    es: {
        title: "¿Listo para una presencia en línea que sí funcione?",
        description:
            "Los negocios locales merecen más que un espacio vacío en la web. Cuéntanos de tu cuadrilla, tu cocina o tu local — y qué quieres que haga la gente cuando te encuentre. Partimos de ahí.",
        cta: "Reservar Consulta",
        ctaHref: "#contact",
    } satisfies CtaBannerDict,
} as const
