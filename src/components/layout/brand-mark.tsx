import { Link } from "react-router";
import { cx } from "@/utils/cx";

/** Wordmark + wireframe globe (`public/brand-mark.svg`). */
export function BrandMark({ className }: { className?: string }) {
    return (
        <Link to="/" className={cx("flex items-center gap-2.5 outline-brand", className)}>
            <img
                src={`${import.meta.env.BASE_URL}brand-mark.svg`}
                alt=""
                width={36}
                height={36}
                decoding="async"
                className="size-9 shrink-0 rounded-lg shadow-xs-skeuomorphic ring-1 ring-neutral-800"
            />
            <span className="text-md font-semibold tracking-tight text-primary">Search AI Global</span>
        </Link>
    );
}
