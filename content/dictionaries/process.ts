import type { ProcessDict } from "@/types/dictionary"

export const processDict = {
    en: {
        title: "How It Works",
        description:
            "A straight path from first conversation to launch — built around how your local business actually operates.",
        items: [
            {
                step: "01",
                title: "Discovery",
                description:
                    "We learn what you do, who you serve, and what “more than a business card” means for your shop or crew — in a focused call.",
            },
            {
                step: "02",
                title: "Design",
                description:
                    "We shape a clear layout and story: services, proof, hours, areas — whatever your customers need before they call.",
            },
            {
                step: "03",
                title: "Build",
                description:
                    "Your site ships with the latest web technologies, mobile-first layout, and SEO foundations for local search.",
            },
            {
                step: "04",
                title: "Launch",
                description:
                    "We go live, help search engines find you, and hand over ownership. Need something extra later? We’re a message away.",
            },
        ],
    } satisfies ProcessDict,
    es: {
        title: "Cómo Funciona",
        description:
            "Un camino directo desde la primera charla hasta el lanzamiento — pensado en cómo opera tu negocio local de verdad.",
        items: [
            {
                step: "01",
                title: "Descubrimiento",
                description:
                    "Entendemos qué haces, a quién sirves y qué significa ‘más que una tarjeta’ para tu taller o local — en una llamada enfocada.",
            },
            {
                step: "02",
                title: "Diseño",
                description:
                    "Armamos estructura e historia clara: servicios, pruebas, horarios, zonas — lo que tu cliente necesita antes de llamar.",
            },
            {
                step: "03",
                title: "Desarrollo",
                description:
                    "Tu sitio sale con tecnología web actual, diseño móvil primero y bases de SEO para búsqueda local.",
            },
            {
                step: "04",
                title: "Lanzamiento",
                description:
                    "Publicamos, ayudamos a que los buscadores te encuentren y te entregamos el control. ¿Algo extra después? Estamos a un mensaje.",
            },
        ],
    } satisfies ProcessDict,
} as const
