import type { ComponentProps } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export type CtaButtonProps = Omit<ComponentProps<typeof Button>, "asChild"> & {
    href: string
    children: React.ReactNode
}

/** Marketing CTA: `Link` + `Button`. External `http(s)` URLs open in a new tab; `data-cta-button` for tests/analytics. */
export function CtaButton({
    href,
    children,
    className,
    variant = "default",
    size = "default",
    ...rest
}: CtaButtonProps) {
    const isExternal = href.startsWith("http")

    return (
        <Button
            asChild
            variant={variant}
            size={size}
            className={className}
            data-cta-button={true}
            {...rest}
        >
            <Link
                href={href}
                {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                })}
            >
                {children}
            </Link>
        </Button>
    )
}
