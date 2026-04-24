import { Link } from "react-router";
import { cx } from "@/utils/cx";

/** Simple wordmark + inline SVG mark (no legacy logo asset). */
export function BrandMark({ className }: { className?: string }) {
    return (
        <Link to="/" className={cx("flex items-center gap-2.5 outline-brand", className)}>
            <span
                className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-solid text-white shadow-xs-skeuomorphic ring-1 ring-transparent ring-inset"
                aria-hidden
            >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="opacity-90" />
                    <path
                        d="M12 3c0 0 4 4.5 4 9a4 4 0 1 1-8 0c0-4.5 4-9 4-9Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="12" cy="11" r="1.5" fill="currentColor" />
                </svg>
            </span>
            <span className="text-md font-semibold tracking-tight text-primary">Search AI Global</span>
        </Link>
    );
}
