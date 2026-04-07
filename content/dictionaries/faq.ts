import type { FaqDict } from "@/types/dictionary"

export const faqDict = {
    en: {
        title: "Frequently Asked Questions",
        badge: "FAQ",
        description:
            "Practical answers for local owners — plus room for your own questions. If your situation isn’t on the list, that’s fine: reach out anyway.",
        ctaTitle: "Still have questions?",
        ctaDescription:
            "Every shop is a little different. Tell us what you’re picturing — we’re happy to riff and see what’s possible.",
        cta: "Contact us",
        ctaHref: "#contact",
        items: [
            // General
            {
                question: "Who do you work with?",
                answer:
                    "Local businesses first: construction and trades, bakeries and food spots, retail shops, professional services — anyone who relies on reputation, foot traffic, or “near me” searches. If you’re not sure you fit, ask. We’d rather have a real conversation than stick to a rigid list.",
            },
            {
                question: "What do you actually build?",
                answer:
                    "Websites that act like a real online presence: who you are, what you offer, proof, and clear ways to get in touch — not a thin digital business card. We use the latest web technologies and SEO so your site loads well, reads well, and can show up in search and maps. Need something off-menu? Describe it; we’ll say if we’re the right fit.",
            },
            {
                question: "How do we get started?",
                answer:
                    "Use the form. Tell us your business type, area, and what you want visitors to do (call, book, visit, order). We’ll set up a short call, then send a clear proposal — usually within a few days. No script you have to match.",
            },
            {
                question: "How much does a project cost?",
                answer:
                    "Scope sets the price — pages, languages, how much custom storytelling, and any extras you want. You’ll see a line-by-line estimate before you commit. If you’re budget-conscious, say so; we can often phase things sensibly.",
            },
            // Project
            {
                question: "How long does a website take?",
                answer:
                    "Many local business sites go live in about 2 to 4 days once we have your content direction. Bigger stories or more sections take longer — we’ll agree on dates up front.",
            },
            {
                question: "How many revisions are included?",
                answer:
                    "Two structured revision rounds are standard — enough to get details right without endless loops. More passes are possible if we scope them.",
            },
            {
                question: "What do you need from me?",
                answer:
                    "A bit of your time, plus what you have: logo, photos of jobs or products, hours, service areas, rough copy. Missing pieces? We’ll help you gather simple material so launch doesn’t stall.",
            },
            // Support
            {
                question: "What happens after the site launches?",
                answer:
                    "Thirty days of bug fixes included. After that, we can keep things fresh with light updates — seasonal hours, new photos, small copy tweaks — on terms that make sense for you.",
            },
            {
                question: "Do you stand behind the work?",
                answer:
                    "Yes. If something’s wrong, we fix it. Local business is word-of-mouth; we’re in it for relationships, not one-off invoices.",
            },
            {
                question: "I already have a site — can you help?",
                answer:
                    "Often. We can refresh the design, tighten performance, improve local SEO, or take over updates. We’ll look at what you have and recommend the smartest next step.",
            },
        ],
    } satisfies FaqDict,
    es: {
        title: "Preguntas Frecuentes",
        badge: "FAQ",
        description:
            "Respuestas prácticas para dueños locales — y espacio para tus propias dudas. Si tu caso no está en la lista, igual escríbenos.",
        ctaTitle: "¿Aún tienes preguntas?",
        ctaDescription:
            "Cada negocio es distinto. Cuéntanos qué imaginas — con gusto vemos qué es posible.",
        cta: "Contáctanos",
        ctaHref: "#contact",
        items: [
            // General
            {
                question: "¿Con quién trabajan?",
                answer:
                    "Prioridad a negocios locales: construcción y oficios, panaderías y comida, tiendas, servicios profesionales — quien dependa de reputación, tráfico a pie o búsquedas ‘cerca de mí’. Si no sabes si encajas, pregunta. Preferimos una conversación real a una lista rígida.",
            },
            {
                question: "¿Qué es lo que realmente construyen?",
                answer:
                    "Sitios que funcionan como presencia en línea de verdad: quiénes son, qué ofrecen, pruebas y formas claras de contacto — no una tarjeta digital delgada. Usamos las últimas tecnologías web y SEO para que cargue bien, se lea bien y pueda aparecer en búsqueda y mapas. ¿Algo fuera de menú? Cuéntanos; te decimos si encaja con nosotros.",
            },
            {
                question: "¿Cómo empezamos?",
                answer:
                    "Usa el formulario. Di tipo de negocio, zona y qué quieres que hagan los visitantes (llamar, reservar, visitar, pedir). Agendamos una llamada corta y luego una propuesta clara — en pocos días. Sin guion que tengas que cumplir al pie de la letra.",
            },
            {
                question: "¿Cuánto cuesta un proyecto?",
                answer:
                    "El alcance marca el precio: páginas, idiomas, cuánta historia personalizada y extras. Verás un desglose antes de comprometerte. Si el presupuesto es ajustado, dilo; a veces podemos por fases.",
            },
            // Proyecto
            {
                question: "¿Cuánto tarda un sitio web?",
                answer:
                    "Muchos sitios de negocios locales salen en unas dos a cuatro dias cuando el contenido fluye. Historias más grandes tardan más — acordamos fechas desde el inicio.",
            },
            {
                question: "¿Cuántas revisiones incluyen?",
                answer:
                    "Dos rondas estructuradas vienen de serie — suficiente para afinar sin bucles eternos. Más pasadas son posibles si las acotamos.",
            },
            {
                question: "¿Qué necesitan de mi parte?",
                answer:
                    "Un poco de tu tiempo y lo que tengas: logo, fotos de trabajos o productos, horarios, zonas de servicio, borradores de texto. ¿Faltan piezas? Te ayudamos a reunir material simple para no frenar el lanzamiento.",
            },
            // Soporte
            {
                question: "¿Qué pasa después del lanzamiento?",
                answer:
                    "Treinta días de corrección de fallos incluidos. Después podemos mantener las cosas al día — horarios de temporada, fotos nuevas, ajustes de texto — en términos que tengan sentido para ti.",
            },
            {
                question: "¿Responden por su trabajo?",
                answer:
                    "Sí. Si algo falla, lo arreglamos. El negocio local es boca a boca; buscamos relaciones, no una sola factura.",
            },
            {
                question: "Ya tengo sitio — ¿pueden ayudar?",
                answer:
                    "A menudo. Podemos refrescar diseño, rendimiento, SEO local o hacernos cargo de actualizaciones. Revisamos lo que hay y recomendamos el siguiente paso más sensato.",
            },
        ],
    } satisfies FaqDict,
} as const
