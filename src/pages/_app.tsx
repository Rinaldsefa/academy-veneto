import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script strategy="lazyOnload" id="iubenda-privacy">
				{`
        (function
          (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);
      	`}
			</Script>
			<Script strategy="lazyOnload" id="iubenda-cookie-banner">
				{`
				var _iub = _iub || [];
				_iub.csConfiguration = {"floatingPreferencesButtonDisplay":"bottom-right","lang":"en","perPurposeConsent":true,"siteId":3081551,"whitelabel":false,"cookiePolicyId":25968168, "banner":{ "acceptButtonDisplay":true,"closeButtonRejects":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-top-center" }};
				`}
			</Script>
			<Script
				strategy="lazyOnload"
				id="iubenda-cookie"
				src="//cdn.iubenda.com/cs/iubenda_cs.js"
				async
			/>
			<Analytics />
			<Component {...pageProps} />
		</>
	);
}
