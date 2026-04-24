import { siteConfig } from "@/config/site";
import { useDocumentTitle } from "@/hooks/use-document-title";

export function PrivacyPage() {
    useDocumentTitle("Privacy");

    return (
        <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
            <article className="prose prose-neutral max-w-3xl prose-headings:font-semibold prose-a:text-secondary prose-a:underline prose-a:decoration-neutral-300 prose-a:underline-offset-4 hover:prose-a:decoration-neutral-900">
                <h1>Privacy notice</h1>
                <p>Last updated: January 19, 2026</p>

                <p>
                    This Privacy Notice for Search AI Global Limited (&apos;we&apos;, &apos;us&apos;, or &apos;our&apos;) describes how and why we might access,
                    collect, store, use, and/or share (&apos;process&apos;) your personal information when you use our services (&apos;Services&apos;). This includes
                    when you:
                </p>

                <ul>
                    <li>Visit our landing page at https://www.searchaiglobal.com.</li>
                    <li>Access our aggregated and enriched datasets via the Snowflake Marketplace.</li>
                    <li>Engage with us in other related ways, including any marketing or events.</li>
                </ul>

                <h2>1. What information do we collect?</h2>
                <p>
                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products,
                    or when you contact us.
                </p>
                <p>
                    Contact Information: We collect information you provide when you contact us for support at{" "}
                    <a href={siteConfig.mailtoHref}>{siteConfig.contactEmail}</a>.
                </p>
                <p>Data Usage Metrics: We collect usage metrics regarding how you interact with our datasets.</p>

                <h2>Information not collected</h2>
                <p>
                    No Automated Web Tracking: Our website is a static landing page; we do not automatically collect IP addresses, browser characteristics, or device
                    information when you visit.
                </p>
                <p>
                    No Sensitive Information: We do not process sensitive personal information, such as racial or ethnic origins, sexual orientation, or religious
                    beliefs.
                </p>
                <p>No Third-Party Collection: We do not collect any information from third parties.</p>

                <h2>2. How do we process your information?</h2>
                <p>
                    We process your information to provide, improve, and administer our Services, communicate with you, and for security and fraud prevention. We process
                    your information only when we have a valid legal reason to do so.
                </p>

                <h2>3. When and with whom do we share your personal information?</h2>
                <p>
                    We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition
                    of all or a portion of our business to another company.
                </p>

                <h2>4. How long do we keep your information?</h2>
                <p>
                    We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless a longer retention period is
                    required or permitted by law. When we have no ongoing legitimate business need to process your information, we will either delete or anonymize it.
                </p>

                <h2>5. How do we keep your information safe?</h2>
                <p>
                    We have implemented adequate organizational and technical security measures designed to protect your personal information. However, no electronic
                    transmission over the internet or storage technology can be guaranteed to be 100% secure.
                </p>

                <h2>6. Do we collect information from minors?</h2>
                <p>
                    We do not knowingly collect data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18.
                </p>

                <h2>7. What are your privacy rights?</h2>
                <p>
                    Requesting Access: Depending on your geographic location, you may have certain rights regarding your personal information, including the right to
                    request access, correct inaccuracies, or delete your data.
                </p>
                <p>
                    Withdrawing Consent: If we are relying on your consent to process information, you have the right to withdraw it at any time.
                </p>
                <p>
                    Exercising Rights: You can exercise your rights by contacting us at{" "}
                    <a href={siteConfig.mailtoHref}>{siteConfig.contactEmail}</a>.
                </p>

                <h2>8. How can you contact us about this notice?</h2>
                <p>
                    If you have questions or comments about this notice, you may email us at{" "}
                    <a href={siteConfig.mailtoHref}>{siteConfig.contactEmail}</a>.
                </p>
            </article>
        </div>
    );
}
