import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { sectionBg } from "@/config/sections"
import type { ProcessDict, ProcessStep } from "@/types/dictionary"

type Props = {
    dict: ProcessDict
}

function ProcessCard({ item }: { item: ProcessStep }) {
    return (
        <Card className="border-primary-gradient-card ring-0">
            <CardContent className="flex flex-col gap-4">
                <span className="text-4xl font-bold tracking-tight text-primary-gradient">
                    {item.step}
                </span>
                <div>
                    <CardTitle className="font-bold">{item.title}</CardTitle>
                    <CardDescription className="mt-1.5 text-md font-semibold">{item.description}</CardDescription>
                </div>
            </CardContent>
        </Card>
    )
}

// Tier 1 — single-page sites. Answers "what's it like to work with you?" before the portfolio.
export default function BriefProcess({ dict }: Props) {
    return (
        <Section id="process" variant={sectionBg.process}>
            <Container>
                <SectionHeading
                    title={dict.title}
                    description={dict.description}
                    align="center"
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {dict.items.map((item, i) => (
                        <ProcessCard key={i} item={item} />
                    ))}
                </div>
            </Container>
        </Section>
    )
}
