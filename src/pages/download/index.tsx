import Map from "@/components/map";
import Courses from "@/components/steps/content/courses";
import Cta from "@/components/ui/cta";
import Form from "@/components/ui/form";
import Header from "@/components/ui/header";

import localFont from "next/font/local";
import Head from "next/head";

export const aileron = localFont({
  src: [
    {
      path: "../../styles/fonts/Aileron-UltraLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Aileron-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Aileron-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Aileron-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Aileron-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../styles/fonts/Aileron-Black.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function Corsi() {
  return (
    <>
      <div
        className={`bg-white overflow-hidden flex flex-col h-screen justify-end ${aileron.className}`}
      >
        DOWNLOAD
      </div>
    </>
  );
}
