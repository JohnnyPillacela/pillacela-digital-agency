import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CtaButton } from "@/components/shared/cta-button"
import { HeroTechLogosCarousel } from "@/components/briefs/HeroTechLogosCarousel"
import { sectionBg } from "@/config/sections"
import { cn } from "@/lib/utils"
import { splitOnLastSpace } from "@/utils/text-slicer"
import type { HeroDict, StatsDict } from "@/types/dictionary"

type Props = {
    dict: HeroDict
    stats: StatsDict
}

// Tier 1 — split hero: copy left, image right, stats + trusted-by strip (dict-driven copy; layout matches marketing hero).
// Headline accent: last word of `dict.title` (see splitOnLastSpace).
export default function BriefHero({ dict, stats }: Props) {
    const { slicedText: lead, last: accent } = splitOnLastSpace(dict.title)
    const statItemsClipped = stats.items.slice(0, 3)

    return (
        <Section
            id="hero"
            variant={sectionBg.hero}
            className="relative overflow-hidden lg:py-10"
        >

            <div
                className="bg-hero-radial-glow pointer-events-none absolute inset-y-0 right-0 z-0 w-[55%]"
                aria-hidden
            />
            <Container className="relative z-10">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="text-left">
                        <Badge
                            variant="outline"
                            className="mb-6 h-auto gap-2 py-2 text-sm font-semibold text-foreground uppercase"
                        >
                            <span
                                className="size-2 shrink-0 rounded-full bg-primary-gradient"
                                aria-hidden
                            />
                            {dict.badge}
                        </Badge>
                        <h1 className="text-6xl font-bold tracking-tight text-foreground md:text-5xl">
                            {lead}
                            {accent != null && accent.length > 0 ? (
                                <>
                                    {" "}
                                    <span className="text-primary-gradient">{accent}</span>
                                </>
                            ) : null}
                        </h1>

                        <p className="mt-6 max-w-xl text-2xl text-muted-foreground">
                            {dict.subtitle}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-6">
                            {dict.cta && (
                                <CtaButton
                                    href={dict.ctaHref ?? "#contact"}
                                    variant="gradient"
                                    size="lg"
                                    className="rounded-full px-6 text-base font-semibold"
                                >
                                    {dict.cta}
                                    <ArrowRight className="size-4" aria-hidden />
                                </CtaButton>
                            )}
                            <Link
                                href={dict.cta2Href}
                                className="text-sm font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
                            >
                                {dict.cta2} &gt;
                            </Link>
                        </div>

                        <Separator className="my-4 md:my-8"/>

                        <div className="flex flex-wrap gap-6 md:gap-0">
                                {statItemsClipped.map((item, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "flex-1 text-center md:px-6 md:text-left",
                                            i > 0 && "md:border-l md:border-border"
                                        )}
                                    >
                                        <p className="text-2xl font-semibold text-primary md:text-3xl">
                                            {item.value}
                                        </p>
                                        <p className="mt-1 text-md text-muted-foreground">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        <div
                            className="pointer-events-none absolute -top-6 -right-2 size-28 bg-[radial-gradient(circle_at_1px_1px,var(--color-primary)/35%_1px,transparent_0)] opacity-70 [background-size:10px_10px] md:size-36"
                            aria-hidden
                        />
                        <div className="relative">
                            <div
                                className="pointer-events-none absolute -bottom-2 -left-2 z-0 h-[78%] w-[78%] rounded-bl-[2.25rem] border-b-[5px] border-l-[5px] border-primary shadow-[0_0_28px_rgba(0,210,223,0.35)]"
                                aria-hidden
                            />
                            <div className="relative z-10 overflow-hidden rounded-[2.25rem] shadow-xl shadow-primary ring-1 ring-border/60">
                                <Image
                                    src="/page-images/desk-unsplash.jpg"
                                    alt="Desk"
                                    width={960}
                                    height={720}
                                    className="aspect-4/3 w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 md:mt-8">
                    <Separator />
                    <div className="pt-4">
                        <p className="text-center text-lg text-muted-foreground">
                            {dict.techBlock}
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-4 md:gap-0">
                            {dict.techUsed.map((name, i) => (
                                <span
                                    key={`tech-used-${i}-${name}`}
                                    className={cn(
                                        "px-4 text-lg font-medium text-muted-foreground",
                                        i > 0 && "md:border-l md:border-border"
                                    )}
                                >
                                    {name}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6">
                            <HeroTechLogosCarousel
                                logos={dict.techLogos}
                            />
                        </div>
                        <div className="mt-8 flex justify-center">
                            <a
                                href="#pain-points"
                                className="inline-flex text-primary transition-transform hover:translate-y-0.5"
                                aria-label="Scroll to next section"
                            >
                                <ChevronDown className="size-6" strokeWidth={2.5} />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
