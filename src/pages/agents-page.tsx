import { Database01, Dataflow01, FileSearch02 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { CtaSection } from "@/components/marketing/cta-section";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { siteConfig } from "@/config/site";
import { useDocumentTitle } from "@/hooks/use-document-title";

export function AgentsPage() {
    useDocumentTitle("Agentic developers");

    const features = [
        {
            icon: Database01,
            title: "Vectorized & structured",
            description: `Every document is pre-chunked and embedded using ${siteConfig.embeddingModel}, ready for your vector database or LlamaIndex/LangChain pipeline.`,
        },
        {
            icon: FileSearch02,
            title: "Article-level granularity",
            description:
                "We don't just give you the PDF. Structured metadata down to the article and paragraph lets your agents cite sources with surgical precision.",
        },
        {
            icon: Dataflow01,
            title: "Zero-ETL delivery",
            description:
                'No APIs to manage or scrapers to maintain. Direct Snowflake sharing means your "Source of Truth" is always live.',
        },
    ];

    return (
        <>
            <section className="border-b border-secondary bg-primary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <Badge type="pill-color" color="brand" className="mb-4">
                        Agentic developer
                    </Badge>
                    <h1 className="max-w-3xl text-display-md font-semibold tracking-tight text-primary md:text-display-lg">
                        The golden source for agentic AI compliance
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-tertiary">
                        Stop grounding your agents in hallucinations. Access the world’s only live-updating, vectorized dataset of global AI policy—delivered as a direct
                        Snowflake Data Share for instant RAG integration.
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
                    <h2 className="text-display-xs font-semibold text-primary">The problem: the “hallucination” tax</h2>
                    <div className="mt-6 max-w-3xl space-y-4 text-lg text-tertiary">
                        <p>
                            The biggest risk to your AI roadmap is a &quot;confidently wrong&quot; model. Traditional scrapers break, and raw PDFs are a nightmare to chunk
                            and vectorize.
                        </p>
                        <p>Your developers are wasting 40% of their time on data plumbing instead of agent logic.</p>
                    </div>
                </div>
            </section>

            <section className="border-t border-secondary bg-secondary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h2 className="text-display-xs font-semibold text-primary">The solution: agent-ready infrastructure</h2>
                    <p className="mt-4 max-w-3xl text-lg text-tertiary">
                        Purpose-built structure and delivery so your team spends time on agents—not brittle ingestion.
                    </p>
                    <div className="mt-10">
                        <FeatureGrid items={features} />
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
