import { Link } from "react-router";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
    return (
        <footer className="border-t border-secondary bg-secondary">
            <div className="mx-auto flex max-w-container flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-8">
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-primary">{siteConfig.companyName}</span>
                    <span className="text-sm text-tertiary">{siteConfig.tagline}</span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                    <Link to="/agents" className="text-brand-secondary hover:text-brand-secondary_hover">
                        Agents
                    </Link>
                    <Link to="/finance" className="text-brand-secondary hover:text-brand-secondary_hover">
                        Finance
                    </Link>
                    <Link to="/consulting" className="text-brand-secondary hover:text-brand-secondary_hover">
                        Consulting
                    </Link>
                    <Link to="/privacy" className="text-brand-secondary hover:text-brand-secondary_hover">
                        Privacy
                    </Link>
                    <a href={siteConfig.mailtoHref} className="text-brand-secondary hover:text-brand-secondary_hover">
                        {siteConfig.contactEmail}
                    </a>
                </div>
            </div>
        </footer>
    );
}
