import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu01, XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { BrandMark } from "@/components/layout/brand-mark";
import { siteConfig } from "@/config/site";
import { cx } from "@/utils/cx";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cx(
        "rounded-md px-3 py-2 text-sm font-semibold transition-colors outline-brand",
        isActive ? "bg-secondary text-secondary" : "text-tertiary hover:bg-primary_hover hover:text-secondary",
    );

const segments = [
    { to: "/agents", label: "Agents" },
    { to: "/finance", label: "Finance" },
    { to: "/consulting", label: "Consulting" },
] as const;

export function SiteHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-secondary bg-primary/95 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-4 px-4 md:px-8">
                <BrandMark />

                <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
                    {segments.map((item) => (
                        <NavLink key={item.to} to={item.to} className={navLinkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                    <NavLink to="/privacy" className={navLinkClass}>
                        Privacy
                    </NavLink>
                </nav>

                <div className="hidden items-center gap-2 md:flex">
                    <Button color="secondary" size="md" href={siteConfig.snowflakeMarketplaceUrl} target="_blank" rel="noreferrer">
                        Snowflake
                    </Button>
                    <Button color="primary" size="md" href={siteConfig.mailtoHref}>
                        Contact
                    </Button>
                </div>

                <Button
                    color="tertiary"
                    size="md"
                    className="md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    onClick={() => setOpen((o) => !o)}
                    iconLeading={open ? XClose : Menu01}
                >
                    Menu
                </Button>
            </div>

            {open && (
                <div id="mobile-nav" className="border-t border-secondary bg-primary px-4 py-4 md:hidden">
                    <div className="flex flex-col gap-1">
                        {segments.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="rounded-md px-3 py-3 text-md font-semibold text-primary hover:bg-primary_hover"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="/privacy"
                            className="rounded-md px-3 py-3 text-md font-semibold text-primary hover:bg-primary_hover"
                            onClick={() => setOpen(false)}
                        >
                            Privacy
                        </Link>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <Button size="lg" href={siteConfig.mailtoHref} onClick={() => setOpen(false)}>
                            Contact
                        </Button>
                        <Button color="secondary" size="lg" href={siteConfig.snowflakeMarketplaceUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                            Snowflake Marketplace
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
