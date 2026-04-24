import { ArrowUpRight, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { siteConfig } from "@/config/site";

export function CtaSection() {
    return (
        <section className="border-t border-secondary bg-secondary py-16 md:py-20">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-2xl rounded-2xl border border-secondary bg-primary p-8 shadow-xs md:p-10">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">What should you do next?</h2>
                    <p className="mt-3 text-lg text-tertiary">
                        Get the dataset in Snowflake or talk to us about access, scope, and how your team works with policy data.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Button size="xl" href={siteConfig.mailtoHref} iconLeading={Mail01}>
                            Contact us
                        </Button>
                        <Button
                            color="secondary"
                            size="xl"
                            href={siteConfig.snowflakeMarketplaceUrl}
                            target="_blank"
                            rel="noreferrer"
                            iconTrailing={ArrowUpRight}
                        >
                            Open in Snowflake Marketplace
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
