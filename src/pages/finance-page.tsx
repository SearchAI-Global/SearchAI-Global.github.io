import { ChartBreakoutSquare, ClockRewind, Tag01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { CtaSection } from "@/components/marketing/cta-section";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { siteConfig } from "@/config/site";
import { useDocumentTitle } from "@/hooks/use-document-title";

export function FinancePage() {
    useDocumentTitle("Asset managers & quants");

    const features = [
        {
            icon: ChartBreakoutSquare,
            title: "Quant-ready SQL",
            description:
                "Join structured policy metadata directly against your ticker-mapped portfolio. No manual discovery required.",
        },
        {
            icon: Tag01,
            title: "Sentiment & severity scoring",
            description:
                'Expert-curated impact tags (Restrictive vs. Permissive) help you model the "tail risk" of sudden jurisdictional shifts.',
        },
        {
            icon: ClockRewind,
            title: "Point-in-time audit trails",
            description:
                "Full version history shows exactly what the law was on any given date—essential for backtesting and compliance audits.",
        },
    ];

    return (
        <>
            <section className="border-b border-secondary bg-primary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <Badge type="pill-color" color="gray" className="mb-4">
                        Asset manager · Quant / risk
                    </Badge>
                    <h1 className="max-w-3xl text-display-md font-semibold tracking-tight text-primary md:text-display-lg">
                        Turn global AI regulation into a quantifiable risk factor
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-tertiary">
                        Identify regulatory headwinds before they are priced in. Access structured global AI policy data directly in your Snowflake environment to
                        stress-test portfolios and refine valuation models.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button size="xl" href={siteConfig.mailtoHref}>
                            Contact us
                        </Button>
                        <Button color="secondary" size="xl" href={siteConfig.snowflakeMarketplaceUrl} target="_blank" rel="noreferrer">
                            Open in Snowflake
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h2 className="text-display-xs font-semibold text-primary">The problem: the alpha gap in AI policy</h2>
                    <div className="mt-6 max-w-3xl space-y-4 text-lg text-tertiary">
                        <p>AI policy shifts are no longer &quot;news&quot;—they are systematic risk factors.</p>
                        <p>
                            Research shows that sentiment signals from regulatory text are most predictive in mid- and small-cap tech where analyst coverage is low. If
                            you&apos;re waiting for the headline, you&apos;re already late.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-secondary bg-primary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h2 className="text-display-xs font-semibold text-primary">The solution: computational policy intelligence</h2>
                    <p className="mt-4 max-w-3xl text-lg text-tertiary">Structured fields and history designed for models, joins, and audit—not PDF archaeology.</p>
                    <div className="mt-10">
                        <FeatureGrid items={features} />
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
