/**
 * Site-wide URLs and configurable marketing copy.
 * Update `embeddingModel` when the production embedding model is finalized.
 */
export const siteConfig = {
    companyName: "Search AI Global",
    tagline: "AI policy and regulation—timed, sourced, actionable",
    contactEmail: "support@searchaiglobal.com",
    get mailtoHref() {
        return `mailto:${this.contactEmail}`;
    },
    snowflakeMarketplaceUrl: "https://app.snowflake.com/marketplace/listing/GZTDZV656O",
    /** Shown in agent/developer path copy */
    embeddingModel: "your chosen embedding model",
    /** Optional: set to a newsletter or form URL when available */
    newsletterUrl: null as string | null,
} as const;
