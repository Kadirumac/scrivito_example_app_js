import * as React from "react";
import * as Scrivito from "scrivito";
import { HelmetProvider } from "react-helmet-async";

import { CurrentPageMetadata } from "./Components/CurrentPageMetadata";
import { ErrorBoundary } from "./Components/ErrorBoundary";
import { Footer } from "./Components/Footer";
import { Intercom } from "./Components/Intercom";
import { Navigation } from "./Components/Navigation";
import { NotFoundErrorPage } from "./Components/NotFoundErrorPage";
import { CookieConsentBanner } from "./Components/CookieConsentBanner";
import { Tracking } from "./Components/Tracking";
import { CookieConsentProvider } from "./Components/CookieConsentContext";

export const helmetContext = {};

export function App({ appWrapperRef }) {
  return (
    <ErrorBoundary>
      <CookieConsentProvider>
        <HelmetProvider context={helmetContext}>
          <React.Suspense>
            <div ref={appWrapperRef}>
              <div className="content-wrapper">
                <Navigation />
                <Scrivito.CurrentPage />
                <Scrivito.NotFoundErrorPage>
                  <NotFoundErrorPage />
                </Scrivito.NotFoundErrorPage>
              </div>
              <Footer />
              <CurrentPageMetadata />
              <CookieConsentBanner />
              <Tracking />
              <Intercom />
            </div>
          </React.Suspense>
        </HelmetProvider>
      </CookieConsentProvider>
    </ErrorBoundary>
  );
}
