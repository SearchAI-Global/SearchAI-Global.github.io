import { Button } from "@/components/base/buttons/button";
import { siteConfig } from "@/config/site";

/** Sticky conversion strip on small screens */
export function MobileCtaBar() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-secondary bg-primary/95 p-3 backdrop-blur-md md:hidden">
            <div className="mx-auto flex max-w-container gap-2">
                <Button className="min-w-0 flex-1" size="md" href={siteConfig.mailtoHref}>
                    Contact
                </Button>
                <Button className="min-w-0 flex-1" color="secondary" size="md" href={siteConfig.snowflakeMarketplaceUrl} target="_blank" rel="noreferrer">
                    Get data
                </Button>
            </div>
        </div>
    );
}
