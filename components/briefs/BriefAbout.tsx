import { Check } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CtaButton } from "@/components/shared/cta-button"
import { sectionBg } from "@/config/sections"
import type { AboutDict } from "@/types/dictionary"

type Props = {
    dict: AboutDict
}

// Tier 1 — single-page sites. No form, no heavy interactions.
export default function BriefAbout({ dict }: Props) {
    return (
        <Section id="about" variant={sectionBg.about}>
            <Container>
                <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
                    {/* Left: proof — concrete reasons to believe it */}
                    {dict.highlights && dict.highlights.length > 0 && (
                        <ul className="space-y-3">
                            {dict.highlights.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 rounded-lg bg-muted/40 px-4 py-3 border-primary-gradient"
                                >
                                    <Check className="mt-0.5 size-4 shrink-0 text-secondary" />
                                    <span className="text-sm text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Right: identity — who you are and why it matters */}
                    <div>
                        {dict.tagline && (
                            <p className="mb-3 text-lg font-semibold uppercase tracking-widest text-primary-gradient">
                                {dict.tagline}
                            </p>
                        )}
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                            {dict.title}
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            {dict.description}
                        </p>
                        {dict.cta && (
                            <div className="mt-8">
                                <CtaButton
                                    href={dict.ctaHref ?? "#services"}
                                    variant="gradient"
                                    size="lg"
                                >
                                    {dict.cta}
                                </CtaButton>
                            </div>
                        )}
                    </div>
                </div>

            </Container>
        </Section>
    )
}
