import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import PopUp from "@/components/ui/popup";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Script
        id="chatbot-embed"
        src="https://www.chatbase.co/embed.min.js"
        defer
      ></Script>
      <Script id="chatbot-config">
        {`
         
          window.embeddedChatbotConfig = {
          chatbotId: "NC4Vg4VWqwqr2ifdenvMc",
          domain: "www.chatbase.co"
          }
          
        `}
      </Script>
      <Script id="cookie-consent">
        {`
         var _iub = _iub || [];
         _iub.csConfiguration = {"floatingPreferencesButtonDisplay":"bottom-right","perPurposeConsent":true,"siteId":3081551,"whitelabel":false,"cookiePolicyId":34668176,"lang":"it", "banner":{ "acceptButtonColor":"#22C55E","acceptButtonDisplay":true,"backgroundColor":"#FFFFFF","backgroundOverlay":true,"closeButtonRejects":true,"customizeButtonColor":"#0EA5E9","customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"logo":null,"linksColor":"#000000","position":"float-bottom-right","textColor":"#000000" },
               "callback": {
                 onPreferenceExpressedOrNotNeeded: function (preference) {
                     dataLayer.push({
                         iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut()
                     });
                     if (!preference) {
                         dataLayer.push({
                             event: "iubenda_preference_not_needed"
                         });
                     } else {
                         if (preference.consent === true) {
                             dataLayer.push({
                                 event: "iubenda_consent_given"
                             });
                         } else if (preference.consent === false) {
                             dataLayer.push({
                                 event: "iubenda_consent_rejected"
                             });
                         } else if (preference.purposes) {
                             for (var purposeId in preference.purposes) {
                                 if (preference.purposes[purposeId]) {
                                     dataLayer.push({
                                         event: "iubenda_consent_given_purpose_" + purposeId
                                     });
                                 }
                             }
                         }
                     }
                 }
             }
         };
        `}
      </Script>
      <Script src="//cs.iubenda.com/sync/3081551.js" />
      <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" async />

      <Component {...pageProps} />

      <PopUp />
    </>
  );
}
