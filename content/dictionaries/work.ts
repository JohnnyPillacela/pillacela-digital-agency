import type { WorkDict } from "@/types/dictionary"

const companies = [
    {
        title: "Ram Roofers",
        tag: "Website & SEO",
        image: "/website-screenshots/ram-roofers-hero.png",
        href: "https://www.ramroofers.com",
    },
    {
        title: "LPS Construction LLC",
        tag: "Website & SEO",
        image: "/website-screenshots/pillacela-hero.png",
        href: "https://www.pillacelabuilds.com",
    },
    {
        title: "Marsh Fried Services Inc",
        tag: "Website, Design, SEO",
        image: "/website-screenshots/marsh-fried-inc-hero.png",
        href: "https://www.marshfried.com",
    },
]

export const workDict = {
    en: {
        title: "Our Work",
        description:
            "A sample of sites for local trades, construction, and businesses that needed presence and SEO — not just a link in their email signature.",
        visitSiteLabel: "Visit live site",
        items: companies,
    } satisfies WorkDict,
    es: {
        title: "Nuestro Trabajo",
        description:
            "Una muestra de sitios para oficios locales, construcción y negocios que necesitaban presencia y SEO — no solo un enlace en la firma del correo.",
        visitSiteLabel: "Ver sitio en vivo",
        items: companies,
    } satisfies WorkDict
} as const
