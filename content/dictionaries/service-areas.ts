import type { ServiceAreasDict } from "@/types/dictionary"

export const serviceAreasDict = {
    en: {
        title: "Areas We Serve",
        description:
            "Rooted in Elizabeth, NJ — partnering with local construction companies, shops, food businesses, and service pros across the area and remotely when it makes sense.",
        items: [
            { city: "Elizabeth",        state: "NJ", slug: "elizabeth" },
            { city: "Newark",      state: "NJ", slug: "newark" },
            { city: "Union", state: "NJ", slug: "union" },
            { city: "Hillside", state: "NJ", slug: "hillside" },
            { city: "Roselle", state: "NJ", slug: "roselle" },
            { city: "Roselle Park", state: "NJ", slug: "roselle-park" },
            { city: "Cranford", state: "NJ", slug: "cranford" },
        ],
        note: "Local businesses across New Jersey — and remote projects when the fit is right.",
    } satisfies ServiceAreasDict,
    es: {
        title: "Áreas que Atendemos",
        description:
            "Con base en Elizabeth, NJ — trabajamos con empresas de construcción locales, tiendas, comida y oficios en la zona y a distancia cuando tiene sentido.",
        items: [
            { city: "Elizabeth",        state: "NJ", slug: "elizabeth" },
            { city: "Newark",      state: "NJ", slug: "newark" },
            { city: "Union", state: "NJ", slug: "union" },
            { city: "Hillside", state: "NJ", slug: "hillside" },
            { city: "Roselle", state: "NJ", slug: "roselle" },
            { city: "Roselle Park", state: "NJ", slug: "roselle-park" },
            { city: "Cranford", state: "NJ", slug: "cranford" },
        ],
        note: "Negocios locales en todo New Jersey — y proyectos remotos cuando encaja.",
    } satisfies ServiceAreasDict,
} as const
