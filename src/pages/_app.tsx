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

      <Component {...pageProps} />

      <PopUp />
    </>
  );
}
