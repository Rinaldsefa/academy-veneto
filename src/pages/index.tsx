import Head from "next/head";

import Image from "next/image";
import Header from "@/components/ui/header";
import Avatars from "@/components/ui/avatars";
import List from "@/components/ui/list";
import Cta from "@/components/ui/cta";
import Partners from "@/components/ui/partners";
import localFont from "next/font/local";
import Link from "next/link";
import { useStepsStore } from "@/state/steps";
import { useRouter } from "next/router";
import Map from "@/components/map";

export const aileron = localFont({
  src: [
    {
      path: "../styles/fonts/Aileron-UltraLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/fonts/Aileron-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Aileron-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/Aileron-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../styles/fonts/Aileron-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/Aileron-Black.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function Home() {
  const { steps, current, setCurrent } = useStepsStore();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>ITS Academy Veneto - Alta Formazione Post Diploma</title>
        <meta
          name="description"
          content="Scegli il tuo percorso, scegli le aziende con cui fare esperienza, sviluppa i tuoi talenti"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/common/4.png" />
      </Head>

      <Header />

      <div className={`bg-white ${aileron.className}`}>
        <main
          className={`bg-white flex flex-col items-center justify-around  p-8 ${aileron.className}`}
          style={{
            backgroundImage: `url("/assets/home/veneto.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <Image
            src="/assets/common/logo.png"
            width={320}
            height={80}
            className="w-48 md:w-96"
            alt="logo"
          />
          <Avatars />

          <h5 className="text-center md:text-2xl mb-4 font-medium">
            Il percorso di studi biennale post-diploma{" "}
            <span className="text-primary font-semibold">
              che costruisci tu:
            </span>
          </h5>

          <List />

          <h6 className="mt-8 mb-2 text-center md:text-xl">
            Sei pronto ad iniziare il tuo percorso?
          </h6>

          <div className="flex flex-col justify-center items-center gap-4 mt-4">
            <Cta
              onClick={() => {
                setCurrent(
                  steps.find((step) => step.id === "courses")?.id || current.id
                );
                router.push("/corsi");
              }}
              text="Vai ai corsi"
              classes="bg-green-500"
            />
            <Link
              onClick={() => {
                setCurrent(
                  steps.find((step) => step.id === "welcome")?.id || current.id
                );
              }}
              href="/corsi"
              className="text-lg text-green-700 underline"
            >
              Scopri di più sui percorsi
            </Link>
          </div>

          <Map />

          <Partners />

          <Link
            href="https://www.iubenda.com/privacy-policy/25968168"
            className=" text-gray-500 text-sm font-semibold uppercase "
            title="Privacy Policy"
            target="_blank"
          >
            Privacy Policy
          </Link>
        </main>
      </div>
    </>
  );
}
