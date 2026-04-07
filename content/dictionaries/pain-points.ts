import type { PainPointsDict } from "@/types/dictionary"

export const painPointsDict = {
    en: {
        title: "Sound familiar?",
        items: [
            "Your shop or crew doesn’t show up when locals search on Google",
            "Your site is basically a digital business card — it doesn’t answer real questions",
            "Competitors look more legit online even when your work is stronger",
            "You’re not sure how to describe what you need — you just know it should be better",
            "You’re missing Spanish-speaking customers without a proper bilingual presence",
        ],
        closing:
            "If any of this hits home, you’re who we built Pillacela Solutions for — local companies that need a real online presence, solid SEO, and someone who will listen instead of reading from a script.",
    } satisfies PainPointsDict,
    es: {
        title: "¿Te suena conocido?",
        items: [
            "Tu taller o negocio no aparece cuando la gente del barrio busca en Google",
            "Tu sitio es casi solo una tarjeta digital — no responde lo que de verdad importa",
            "La competencia se ve más seria en línea aunque tu trabajo sea mejor",
            "No sabes cómo decir qué necesitas — solo que debería verse mejor",
            "Pierdes clientes hispanohablantes sin una presencia bilingüe bien hecha",
        ],
        closing:
            "Si algo de esto te resuena, para eso está Pillacela Solutions — negocios locales que necesitan presencia en línea de verdad, SEO sólido y alguien que escuche en lugar de leer un guion.",
    } satisfies PainPointsDict,
} as const
