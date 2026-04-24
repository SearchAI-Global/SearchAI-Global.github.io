import { Outlet } from "react-router";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteLayout() {
    return (
        <div className="flex min-h-dvh flex-col bg-secondary">
            <SiteHeader />
            <main className="flex-1 pb-24 md:pb-0">
                <Outlet />
            </main>
            <SiteFooter />
            <MobileCtaBar />
        </div>
    );
}
