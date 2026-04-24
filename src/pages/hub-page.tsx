import { Link } from "react-router";
import { ArrowRight, BarChartSquare02, Briefcase01, Cube01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { CtaSection } from "@/components/marketing/cta-section";
import { siteConfig } from "@/config/site";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { cx } from "@/utils/cx";

const segments = [
    {
        to: "/agents",
        title: "The agentic developer",
        description: "Reliability, RAG performance, and plug-and-play infrastructure for AI compliance.",
        icon: Cube01,
    },
    {
        to: "/finance",
        title: "The asset manager",
        description: "Alpha, tail risk, and SQL-ready policy signals inside Snowflake.",
        icon: BarChartSquare02,
    },
    {
        to: "/consulting",
        title: "The consultant & policy analyst",
        description: "Cross-jurisdiction benchmarking without the PDF grind.",
        icon: Briefcase01,
    },
] as const;

export function HubPage() {
    useDocumentTitle("Global AI policy data");

    return (
        <>
            <section className="border-b border-secondary bg-secondary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <Badge type="pill-color" color="gray" className="mb-4">
                        Golden source for AI policy
                    </Badge>
                    <h1 className="max-w-3xl text-display-md font-semibold tracking-tight text-primary md:text-display-lg lg:text-display-xl">
                        Curated global AI policy—structured for how your team actually works
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl text-tertiary">
                        Pick your lane below. Each path explains how Search AI Global helps you move faster—with provenance, jurisdiction coverage, and delivery
                        directly in Snowflake.
                    </p>
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Button size="xl" href={siteConfig.mailtoHref}>
                            Talk to us
                        </Button>
                        <Button color="secondary" size="xl" href={siteConfig.snowflakeMarketplaceUrl} target="_blank" rel="noreferrer">
                            Get the dataset
                        </Button>
                    </div>
                </div>
            </section>

            <section className="border-b border-secondary bg-primary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Choose your path</h2>
                    <p className="mt-3 max-w-2xl text-lg text-tertiary">Three audiences. Same authoritative dataset—positioned for the workflow you care about.</p>
                    <ul className="mt-10 grid gap-5 md:grid-cols-3">
                        {segments.map((s) => (
                            <li key={s.to}>
                                <Link
                                    to={s.to}
                                    className={cx(
                                        "group flex h-full flex-col rounded-2xl border border-secondary bg-primary p-6 shadow-xs transition-shadow",
                                        "hover:border-neutral-300 hover:shadow-md",
                                    )}
                                >
                                    <span className="flex size-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200 ring-inset">
                                        <s.icon className="size-6" />
                                    </span>
                                    <h3 className="mt-4 text-lg font-semibold text-primary group-hover:text-secondary">{s.title}</h3>
                                    <p className="mt-2 flex-1 text-md text-tertiary">{s.description}</p>
                                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-tertiary group-hover:text-secondary">
                                        View page
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
