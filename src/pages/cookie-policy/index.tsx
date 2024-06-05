import Header from "@/components/ui/header";
import Head from "next/head";

const cookie = `<a href="https://www.iubenda.com/privacy-policy/25968168/cookie-policy" class="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" title="Cookie Policy">Cookie Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>`;

export default function CookiePolicy() {
  return (
    <>
      <>
        <Head>
          <title>ITS Academy veneto - Privacy Policy</title>
          <meta
            name="description"
            content="Scopri tutti i corsi professionali, specializzati dopo il Diplma e trova subito il lavoro dei tuoi sogni"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/common/4.png" />
        </Head>

        <div
          className={`bg-white overflow-hidden flex flex-col h-screen justify-end`}
        >
          <Header />

          <main className="flex flex-col flex-1 overflow-y-scroll">
            <div dangerouslySetInnerHTML={{ __html: cookie }} />
          </main>
        </div>
      </>
    </>
  );
}
