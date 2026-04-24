import { useState } from "react";
import { ArrowUpRight, ChevronDown, Mail01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import type { ApiAccessRequestKind } from "@/components/marketing/api-access-request-modal";
import { ApiAccessRequestModal } from "@/components/marketing/api-access-request-modal";
import { siteConfig } from "@/config/site";
import { useDocumentTitle } from "@/hooks/use-document-title";

const DEV_PREVIEW_CODE = `import requests

payload = {
    "message": "If we fine-tune on customer data in the EU and deploy inference in the US, what cross-border and data-governance obligations should the compliance brief call out?",
    "stream": False,
}

headers = {"Authorization": "Bearer YOUR_DEV_TOKEN"}

response = requests.post(
    "https://api.searchaiglobal.com/v2/compliance/agents/run",
    json=payload,
    headers=headers,
)

print(response.json()["message"]["content"])`;

function mailtoWithSubject(subject: string) {
    const q = new URLSearchParams({ subject });
    return `mailto:${siteConfig.contactEmail}?${q.toString()}`;
}

const integrationRows = [
    {
        label: "Best for",
        api: "Rapid prototyping, multi-tool AI agents, and stateless applications.",
        snowflake: "Enterprise ML training, high-volume auditing, and native Snowflake workloads.",
    },
    {
        label: "Setup time",
        api: "About 5 minutes",
        snowflake: "Under 24 hours",
    },
    {
        label: "Logic",
        api: "Managed by Search AI Global—natural language in, structured JSON out.",
        snowflake: "Fully customizable on your compute—for example Snowflake Cortex Agents or Snowpark.",
    },
] as const;

export function AgentsPage() {
    useDocumentTitle("Agents");
    const [apiRequestOpen, setApiRequestOpen] = useState(false);
    const [apiRequestKind, setApiRequestKind] = useState<ApiAccessRequestKind>("api-key");

    function openApiRequest(kind: ApiAccessRequestKind) {
        setApiRequestKind(kind);
        setApiRequestOpen(true);
    }

    return (
        <>
            <section className="border-b border-secondary bg-primary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <Badge type="pill-color" color="gray" className="mb-4">
                        Agentic developers
                    </Badge>
                    <h1 className="max-w-3xl text-display-md font-semibold tracking-tight text-primary md:text-display-lg">
                        The golden source for agentic AI compliance
                    </h1>
                    <p className="mt-6 max-w-3xl text-pretty text-xl text-tertiary">
                        Stop grounding your agents in hallucinations. Access the world’s only live-updating, vectorized dataset of global AI policy—through the Agent API for
                        natural-language compliance requests, or via a direct Snowflake Data Share for RAG, analytics, and full control in your own environment.
                    </p>
                    <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
                        <Button size="xl" href={siteConfig.mailtoHref} iconLeading={Mail01}>
                            Contact us
                        </Button>
                        <Button
                            color="secondary"
                            size="xl"
                            type="button"
                            onClick={() => {
                                document.getElementById("quickstart-api")?.scrollIntoView({ behavior: "smooth", block: "start" });
                                window.history.replaceState(null, "", "#quickstart-api");
                            }}
                        >
                            Get API access
                        </Button>
                        <Button color="secondary" size="xl" href={siteConfig.snowflakeMarketplaceUrl} target="_blank" rel="noreferrer" iconTrailing={ArrowUpRight}>
                            Open in Snowflake
                        </Button>
                    </div>
                </div>
            </section>

            <section className="border-t border-secondary bg-secondary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm" id="integration-depth">
                        Choose your integration depth
                    </h2>
                    <div className="mt-10 -mx-4 max-w-5xl px-4 md:mx-0 md:px-0">
                        <div className="overflow-x-auto rounded-xl border border-secondary bg-primary shadow-xs md:overflow-visible">
                            <table className="w-full min-w-[36rem] border-collapse text-left text-md">
                                <thead>
                                    <tr className="border-b border-secondary bg-secondary_subtle">
                                        <th className="w-[9.5rem] p-4 font-semibold text-quaternary sm:w-40" scope="col">
                                            <span className="sr-only">Criterion</span>
                                        </th>
                                        <th className="p-4 font-semibold text-primary" scope="col">
                                            The Agent API
                                        </th>
                                        <th className="p-4 font-semibold text-primary" scope="col">
                                            Snowflake Data Share
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {integrationRows.map((row) => (
                                        <tr key={row.label} className="border-b border-secondary last:border-b-0">
                                            <th className="align-top p-4 font-semibold text-secondary" scope="row">
                                                {row.label}
                                            </th>
                                            <td className="align-top p-4 leading-relaxed text-pretty text-tertiary">{row.api}</td>
                                            <td className="align-top p-4 leading-relaxed text-pretty text-tertiary">{row.snowflake}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="scroll-mt-24 border-t border-secondary bg-primary py-16 md:py-20" id="quickstart-api">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">The Quickstart API</h2>
                    <p className="mt-4 max-w-3xl text-pretty text-lg text-tertiary">
                        Integrate real-time compliance intelligence into your agents with a single REST call. No database drivers or heavy SQL—we handle semantic mapping; you
                        get answers.
                    </p>
                    <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-pretty text-lg text-tertiary">
                        <li>
                            <span className="font-medium text-secondary">Natural language in:</span> Ask in plain English; receive structured compliance-oriented responses.
                        </li>
                        <li>
                            <span className="font-medium text-secondary">Reasoning traces:</span> Get the “why” behind flags for audit logs and human review.
                        </li>
                        <li>
                            <span className="font-medium text-secondary">Stateless and fast:</span> Standard JWT or bearer authentication; works with any stack.
                        </li>
                    </ul>
                    <div className="mt-8">
                        <Button size="xl" type="button" iconLeading={Mail01} onClick={() => openApiRequest("developer-token")}>
                            Get a 30-day developer token
                        </Button>
                    </div>

                    <details className="group mt-10 max-w-3xl rounded-xl border border-secondary bg-secondary shadow-xs open:bg-primary">
                        <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3.5 text-md font-semibold text-primary outline-none marker:content-none select-none [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
                            <ChevronDown
                                aria-hidden
                                className="size-5 shrink-0 text-fg-quaternary transition-transform duration-200 group-open:rotate-180"
                                strokeWidth={2}
                            />
                            Developer preview: example request (Python)
                        </summary>
                        <div className="border-t border-secondary px-4 py-4">
                            <p className="text-sm text-tertiary">Natural-language compliance check via the Agent API.</p>
                            <pre className="mt-3 overflow-x-auto rounded-lg border border-secondary bg-secondary p-4 text-sm leading-relaxed text-tertiary [font-family:var(--font-mono)]">
                                <code>{DEV_PREVIEW_CODE}</code>
                            </pre>
                        </div>
                    </details>
                </div>
            </section>

            <section className="border-t border-secondary bg-secondary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Native Snowflake Data Share</h2>
                    <p className="mt-4 max-w-3xl text-pretty text-lg text-tertiary">
                        For teams on high-scale infrastructure, consume our live datasets inside your Snowflake account—no bulk copying, low operational overhead, and updates as
                        we publish.
                    </p>
                    <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-pretty text-lg text-tertiary">
                        <li>
                            <span className="font-medium text-secondary">Live access:</span> Query shared tables as part of your environment.
                        </li>
                        <li>
                            <span className="font-medium text-secondary">Your compute:</span> Run Cortex Agents, Snowpark, or your own SQL and models on the data.
                        </li>
                        <li>
                            <span className="font-medium text-secondary">Your governance:</span> Keep RBAC and controls inside your perimeter.
                        </li>
                    </ul>
                    <div className="mt-8">
                        <Button size="xl" href={siteConfig.snowflakeMarketplaceUrl} target="_blank" rel="noreferrer" iconTrailing={ArrowUpRight}>
                            Find us on Snowflake Marketplace
                        </Button>
                    </div>
                </div>
            </section>

            <section className="border-t border-secondary bg-primary py-16 md:py-20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Pricing</h2>
                    <p className="mt-4 max-w-3xl text-pretty text-lg text-tertiary">
                        Dataset access and the Agent API use different models—Snowflake Data Share is free from us; the API is pay-as-you-go per successful query.
                    </p>
                    <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
                        <div className="flex flex-col rounded-2xl border border-secondary bg-secondary p-8 shadow-xs">
                            <p className="text-sm font-semibold uppercase tracking-wide text-quaternary">Snowflake Data Share</p>
                            <p className="mt-2 text-display-xs font-semibold text-primary">Free</p>
                            <p className="mt-4 flex-1 text-pretty text-md text-tertiary">
                                Access our live AI policy datasets through Snowflake at no charge from Search AI Global. You pay Snowflake only for compute, storage, and data
                                transfer in your own account, as usual.
                            </p>
                            <div className="mt-6">
                                <Button size="lg" href={siteConfig.snowflakeMarketplaceUrl} target="_blank" rel="noreferrer" iconTrailing={ArrowUpRight}>
                                    Find us on Snowflake Marketplace
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-2xl border border-secondary bg-secondary p-8 shadow-xs">
                            <p className="text-sm font-semibold uppercase tracking-wide text-quaternary">Agent API</p>
                            <h3 className="mt-2 text-lg font-semibold text-primary md:text-xl">Predictable, Usage-Based Pricing</h3>
                            <p className="mt-3 text-display-xs font-semibold text-primary">
                                <span className="text-brand-secondary">$0.25</span> / successful query
                            </p>
                            <div className="mt-6">
                                <Button size="lg" type="button" iconLeading={Mail01} onClick={() => openApiRequest("api-key")}>
                                    Get Your API Key — First 50 Queries Free
                                </Button>
                            </div>
                            <h4 className="mt-8 text-md font-semibold text-primary">Integration Details</h4>
                            <ul className="mt-4 space-y-3 text-pretty text-sm text-tertiary">
                                <li>
                                    <span className="font-semibold text-secondary">Free Trial:</span> First 50 live queries free—no card to start.
                                </li>
                                <li>
                                    <span className="font-semibold text-secondary">Postpaid Billing:</span> Pay monthly for what you use—no credit packs or prepay.
                                </li>
                                <li>
                                    <span className="font-semibold text-secondary">Runaway Bill Protection:</span> $500/mo usage cap by default; we pause the API if you hit it.
                                </li>
                                <li>
                                    <span className="font-semibold text-secondary">Volume Scaling:</span> Beyond $500/mo?{" "}
                                    <Button
                                        color="link-color"
                                        size="sm"
                                        href={mailtoWithSubject("Engineering — raise API usage limit")}
                                        className="inline h-auto min-h-0 px-0! py-0 align-baseline"
                                    >
                                        Contact Engineering
                                    </Button>
                                    .
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ApiAccessRequestModal isOpen={apiRequestOpen} onOpenChange={setApiRequestOpen} requestKind={apiRequestKind} />
        </>
    );
}
