import { useEffect } from "react";

export function useDocumentTitle(title: string) {
    useEffect(() => {
        const prev = document.title;
        document.title = `${title} | Search AI Global`;
        return () => {
            document.title = prev;
        };
    }, [title]);
}
