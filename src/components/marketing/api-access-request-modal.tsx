import type { FormEvent } from "react";
import { useEffect, useRef } from "react";
import { Button as AriaButton, Heading as AriaHeading } from "react-aria-components";
import { XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
import { siteConfig } from "@/config/site";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { cx } from "@/utils/cx";

export type ApiAccessRequestKind = "developer-token" | "api-key";

export interface ApiAccessRequestModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    requestKind: ApiAccessRequestKind;
}

const requestTitles: Record<ApiAccessRequestKind, string> = {
    "developer-token": "30-day developer token",
    "api-key": "API key — first 50 queries free",
};

function buildMailtoBody(
    kind: ApiAccessRequestKind,
    data: { email: string; company: string; companyUrl: string; linkedIn: string; useCase: string },
): string {
    const lines = [
        `Request: ${requestTitles[kind]}`,
        "",
        `Work email: ${data.email}`,
        `Company: ${data.company}`,
        data.companyUrl ? `Company / product URL: ${data.companyUrl}` : "Company / product URL: (not provided)",
        data.linkedIn ? `LinkedIn: ${data.linkedIn}` : "LinkedIn: (not provided)",
        "",
        "What are you building / how will you use this?",
        data.useCase,
    ];
    return lines.join("\n");
}

export function ApiAccessRequestModal({ isOpen, onOpenChange, requestKind }: ApiAccessRequestModalProps) {
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (isOpen) {
            formRef.current?.reset();
        }
    }, [isOpen, requestKind]);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);
        const email = String(fd.get("email") ?? "").trim();
        const company = String(fd.get("company") ?? "").trim();
        const companyUrl = String(fd.get("companyUrl") ?? "").trim();
        const linkedIn = String(fd.get("linkedIn") ?? "").trim();
        const useCase = String(fd.get("useCase") ?? "").trim();

        if (!email || !company || !useCase) {
            return;
        }

        const subject =
            requestKind === "developer-token"
                ? "API access — 30-day developer token request"
                : "API access — API key request (first 50 queries free)";

        const body = buildMailtoBody(requestKind, { email, company, companyUrl, linkedIn, useCase });
        const params = new URLSearchParams({ subject, body });
        window.location.href = `mailto:${siteConfig.contactEmail}?${params.toString()}`;
        onOpenChange(false);
    }

    return (
        <ModalOverlay isOpen={isOpen} onOpenChange={onOpenChange} isDismissable>
            <Modal className="max-w-[min(100vw-2rem,28rem)]">
                <Dialog className="mx-auto w-full max-w-[min(100vw-2rem,28rem)] outline-hidden">
                    <div className="relative w-full rounded-2xl border border-secondary bg-primary p-6 shadow-xl ring-1 ring-secondary_alt sm:p-8">
                        <AriaButton
                            aria-label="Close"
                            onPress={() => onOpenChange(false)}
                            className={cx(
                                "absolute top-4 right-4 flex size-10 items-center justify-center rounded-lg text-fg-quaternary outline-brand transition-colors",
                                "hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2",
                            )}
                        >
                            <XClose className="size-5" strokeWidth={2} />
                        </AriaButton>

                        <AriaHeading slot="title" level={2} className="pr-12 text-lg font-semibold text-primary sm:text-xl">
                            Request API access
                        </AriaHeading>
                        <p className="mt-2 text-sm text-tertiary">
                            Tell us a bit about you and your use case. We&apos;ll follow up with next steps—including how to get your{" "}
                            {requestKind === "developer-token" ? "developer token" : "API key"}.
                        </p>

                        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                            <Input
                                name="email"
                                label="Work email"
                                type="email"
                                autoComplete="email"
                                placeholder="you@company.com"
                                isRequired
                            />
                            <Input name="company" label="Company" autoComplete="organization" placeholder="Company name" isRequired />
                            <Input
                                name="companyUrl"
                                label="Company or product URL"
                                placeholder="https://…"
                                hint="Optional — helps us understand your context."
                            />
                            <Input
                                name="linkedIn"
                                label="LinkedIn profile or URL"
                                placeholder="Profile link or handle"
                                hint="Optional."
                            />
                            <TextArea
                                name="useCase"
                                label="What are you building?"
                                placeholder="e.g. Compliance checks inside our product, internal policy research, agent workflow…"
                                rows={4}
                                isRequired
                            />

                            <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                                <Button type="button" color="secondary" size="lg" onClick={() => onOpenChange(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" size="lg">
                                    Submit request
                                </Button>
                            </div>
                        </form>
                    </div>
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
}
