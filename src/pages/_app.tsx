import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import PopUp from "@/components/ui/popup";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
      <PopUp />
    </>
  );
}
