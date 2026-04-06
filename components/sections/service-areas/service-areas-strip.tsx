import { MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { ServiceAreaItem } from "@/types/dictionary"

type Props = {
    items: ServiceAreaItem[]
    note?: string
}

/** Shared service areas strip — no tier awareness. Used by BriefServiceAreas (standalone). */
export function ServiceAreasStrip({ items, note }: Props) {
    return (
        <div>
            <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
                {items.map((item, i) => (
                    <Badge
                        key={i}
                        variant="outline"
                        className="h-auto shrink-0 gap-1.5 px-4 py-2 text-lg font-normal"
                    >
                        <MapPin className="size-3.5 shrink-0 text-primary" />
                        {item.city}
                        {item.state ? `, ${item.state}` : ""}
                    </Badge>
                ))}
            </div>
            {note && (
                <p className="mt-4 text-center text-lg text-muted-foreground">{note}</p>
            )}
        </div>
    )
}
