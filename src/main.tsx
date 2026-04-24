import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { SiteLayout } from "@/components/layout/site-layout";
import { AgentsPage } from "@/pages/agents-page";
import { ConsultingPage } from "@/pages/consulting-page";
import { FinancePage } from "@/pages/finance-page";
import { HubPage } from "@/pages/hub-page";
import { NotFound } from "@/pages/not-found";
import { PrivacyPage } from "@/pages/privacy-page";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="light">
            <BrowserRouter>
                <RouteProvider>
                    <Routes>
                        <Route element={<SiteLayout />}>
                            <Route path="/" element={<HubPage />} />
                            <Route path="/agents" element={<AgentsPage />} />
                            <Route path="/finance" element={<FinancePage />} />
                            <Route path="/consulting" element={<ConsultingPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
