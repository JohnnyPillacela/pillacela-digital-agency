import type { MetadataDict } from "@/types/dictionary"

export const metadataDict = {
    en: {
        home: {
            title: "Home",
            description:
                "Websites and SEO for local businesses — construction, bakeries, shops, and more. An online presence that’s more than a digital business card.",
        },
        services: {
            title: "Services",
            description:
                "Local business websites, SEO, and tailored help — tell us what you need; we don’t stick to a rigid menu.",
        },
        about: {
            title: "About",
            description:
                "Pillacela Solutions helps local companies build a real online presence with modern web tech and search visibility.",
        },
        contact: {
            title: "Contact",
            description:
                "Reach out about your local business — contractors, retail, food, services. Describe what you want built or improved.",
        },
    } satisfies MetadataDict,
    es: {
        home: {
            title: "Inicio",
            description:
                "Sitios web y SEO para negocios locales — construcción, panaderías, tiendas y más. Una presencia en línea que va más allá de la tarjeta digital.",
        },
        services: {
            title: "Servicios",
            description:
                "Sitios para negocios locales, SEO y apoyo a medida — cuéntanos qué necesitas; no nos atamos a un menú rígido.",
        },
        about: {
            title: "Sobre Nosotros",
            description:
                "Pillacela Solutions ayuda a empresas locales a construir presencia online real con tecnología web actual y visibilidad en buscadores.",
        },
        contact: {
            title: "Contacto",
            description:
                "Escríbenos sobre tu negocio local — oficios, retail, comida, servicios. Describe qué quieres construir o mejorar.",
        },
    } satisfies MetadataDict,
} as const
