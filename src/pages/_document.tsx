import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P5CPX5H');`,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `var _iub = _iub || [];
_iub.csConfiguration = {"floatingPreferencesButtonDisplay":"bottom-right","lang":"it","perPurposeConsent":true,"siteId":3081551,"whitelabel":false,"cookiePolicyId":34668176, "banner":{ "acceptButtonDisplay":true,"backgroundOverlay":true,"closeButtonRejects":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"acceptButtonCaption":"Accetta","content":"Il nostro sito utilizza i cookie per personalizzare contenuti ed annunci, fornire funzionalità social e analizzare il traffico del sito. Inoltre, utilizziamo Google Analytics e Facebook Pixel per raccogliere informazioni sulle interazioni degli utenti con il nostro sito e per migliorare la loro esperienza di navigazione.\n\nI dati raccolti da questi strumenti sono anonimi e non permettono di identificare personalmente gli utenti. Tuttavia, se non desideri che le tue informazioni vengano raccolte, puoi disabilitare i cookie nelle impostazioni del tuo browser.\n\nContinuando a navigare sul nostro sito, acconsenti all'utilizzo dei cookie e alla raccolta dei dati da parte di Google Analytics e Facebook Pixel.","customizeButtonCaption":"Scopri di pià" }};`,
					}}
				/>
				<script
					type="text/javascript"
					src="//cdn.iubenda.com/cs/iubenda_cs.js"
					charSet="UTF-8"
					async
				></script>
			</Head>

			<body>
				<Main />
				<NextScript />
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5CPX5H" height="0" width="0" style="display: none; visibility: hidden;" />`,
					}}
				/>
			</body>
		</Html>
	);
}
