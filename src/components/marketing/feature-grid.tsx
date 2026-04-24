import type { FC } from "react";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export function FeatureGrid({
    items,
}: {
    items: { icon: FC<{ className?: string }>; title: string; description: string }[];
}) {
    return (
        <ul className="grid gap-5 md:grid-cols-3">
            {items.map((item) => (
                <li key={item.title} className="rounded-xl border border-secondary bg-primary p-6 shadow-xs">
                    <FeaturedIcon icon={item.icon} color="brand" theme="light" size="lg" />
                    <h3 className="mt-4 text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="mt-2 text-md text-tertiary">{item.description}</p>
                </li>
            ))}
        </ul>
    );
}
