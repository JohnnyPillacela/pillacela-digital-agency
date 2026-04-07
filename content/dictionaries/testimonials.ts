import type { TestimonialsDict } from "@/types/dictionary"

export const testimonialsDict = {
    en: {
        title: "What Local Clients Say",
        description:
            "Shops, trades, and owners who needed more than a placeholder online — real presence, real results.",
        visitSiteLabel: "Visit client site",
        items: [
            {
                quote: "Working with this team completely transformed our online presence. Our leads doubled within the first month of launching the new site.",
                author: "Maria Gonzalez",
                role: "Owner, Bloom Floral Studio",
            },
            {
                quote: "Fast, professional, and affordable. They delivered exactly what we needed without overcomplicating things. Highly recommend.",
                author: "James Okafor",
                role: "CEO, Okafor Electric",
            },
            {
                quote: "Our Google ranking improved dramatically. Customers now find us before our competitors, and the site looks great on mobile.",
                author: "Sofia Reyes",
                role: "Manager, Reyes Auto Detailing",
            },
            {
                quote: "They built us a site that actually brings in calls. Clean, fast, and exactly what we asked for. Couldn't be happier with the results.",
                author: "Ram Roofers",
                role: "Owner, Ram Roofers",
                websiteUrl: "https://www.ramroofers.com",
            },
        ],
    } satisfies TestimonialsDict,
    es: {
        title: "Lo Que Dicen Clientes Locales",
        description:
            "Tiendas, oficios y dueños que necesitaban más que un espacio vacío en línea — presencia y resultados de verdad.",
        visitSiteLabel: "Visitar sitio del cliente",
        items: [
            {
                quote: "Trabajar con este equipo transformó completamente nuestra presencia en línea. Nuestros clientes potenciales se duplicaron en el primer mes.",
                author: "Maria Gonzalez",
                role: "Propietaria, Bloom Floral Studio",
            },
            {
                quote: "Rápido, profesional y asequible. Entregaron exactamente lo que necesitábamos sin complicar las cosas. Muy recomendable.",
                author: "James Okafor",
                role: "CEO, Okafor Electric",
            },
            {
                quote: "Nuestro ranking en Google mejoró notablemente. Los clientes ahora nos encuentran antes que a la competencia, y el sitio se ve genial en móvil.",
                author: "Sofia Reyes",
                role: "Gerente, Reyes Auto Detailing",
            },
            {
                quote: "Nos construyeron un sitio que de verdad genera llamadas. Limpio, rápido y exactamente lo que pedimos. No podríamos estar más contentos.",
                author: "Ram Roofers",
                role: "Propietario, Ram Roofers",
                websiteUrl: "https://www.ramroofers.com",
            },
        ],
    } satisfies TestimonialsDict,
} as const
