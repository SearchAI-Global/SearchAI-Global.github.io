import { Globe01, LayersThree01, ZapFast } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { CtaSection } from "@/components/marketing/cta-section";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { siteConfig } from "@/config/site";
import { useDocumentTitle } from "@/hooks/use-document-title";

export function ConsultingPage() {
    useDocumentTitle("Consultants & policy analysts");

    const features = [
        {
            icon: Globe01,
            title: "100+ jurisdictions, one table",
            description:
                'Ditch the bookmarks. Compare definitions of "High-Risk AI" across the G7 or track China\'s GenAI licensing evolution in seconds.',
        },
        {
            icon: LayersThree01,
            title: "Expert curation",
            description:
                "Every row is verified for provenance and accuracy by senior policy analysts—with original source URLs and high-fidelity translations.",
        },
        {
            icon: ZapFast,
            title: "Automated benchmarking",
            description: "Use SQL to aggregate trends, count requirements, and generate evidence-based reports in minutes instead of weeks.",
        },
    ];

    return (
        <>
            <section className="border-b border-secondary bg-primary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <Badge type="pill-color" color="gray" className="mb-4">
                        Consultant & policy analyst
                    </Badge>
                    <h1 className="max-w-3xl text-display-md font-semibold tracking-tight text-primary md:text-display-lg">
                        Global AI benchmarking at the speed of computation
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-tertiary">
                        Stop the PDF grind. Perform cross-jurisdictional analysis across 100+ regions with a single query. The golden source for AI policy, curated by
                        experts and delivered for scale.
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
                    <h2 className="text-display-xs font-semibold text-primary">The problem: billable hours lost to “discovery”</h2>
                    <div className="mt-6 max-w-3xl space-y-4 text-lg text-tertiary">
                        <p>
                            Your team is spending hundreds of hours manually tracking legislative drafts and regulatory updates. In a landscape that moves this fast, a
                            static &quot;Policy Tracker&quot; spreadsheet is obsolete by the time it&apos;s shared.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-secondary bg-primary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h2 className="text-display-xs font-semibold text-primary">The solution: the analyst&apos;s command center</h2>
                    <p className="mt-4 max-w-3xl text-lg text-tertiary">One query surface for comparison, provenance, and client-ready outputs.</p>
                    <div className="mt-10">
                        <FeatureGrid items={features} />
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
