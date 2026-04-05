"use client"

import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/useLocale"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ className }: { className?: string }) {
    const { locale, toggleLocale } = useLocale()

    return (
        <Button onClick={toggleLocale} variant="outline" size="xs" className={cn(className)}>
            {locale === "en" ? "ES" : "EN"}
        </Button>
    )
}
