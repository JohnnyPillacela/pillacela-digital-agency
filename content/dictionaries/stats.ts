import type { StatsDict } from "@/types/dictionary"

export const statsDict = {
    en: {
        items: [
            { value: "99.9%", label: "Uptime guarantee" },
            { value: "3-day", label: "Average launch" },
            { value: "En/Es", label: "Bilingual support" },
            { value: "100%", label: "Satisfaction guaranteed" },
        ],
    } satisfies StatsDict,
    es: {
        items: [
            { value: "99.9%", label: "Garantía de uptime" },
            { value: "3 días", label: "Lanzamiento promedio" },
            { value: "En/Es", label: "Soporte bilingüe" },
            { value: "100%", label: "Satisfacción garantizada" },
        ],
    } satisfies StatsDict,
} as const
