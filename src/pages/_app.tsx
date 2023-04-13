import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script strategy="lazyOnload" id="iubenda-privacy">
				{`
        (function
           (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);
      `}
			</Script>
			<Component {...pageProps} />
		</>
	);
}
