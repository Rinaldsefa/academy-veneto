import Head from "next/head";

import Image from "next/image";
import Header from "@/components/ui/header";
import Link from "next/link";
import { aileron } from "@/components/ui/font";
import Form from "@/components/ui/form";

export default function JobOrienta() {
  return (
    <>
      <Head>
        <title>ITS Academy Veneto - Job Orienta</title>
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
        >
          <section className="flex flex-col gap-3 justify-center items-center ">
            <h1 className=" text-3xl text-center font-bold text-primary">
              Scopri le opportunità che ti aspettano, vieni a trovarci!
            </h1>

            <h2 className=" text-2xl text-center font-semibold ">
              Saremo al Job Orienta:
            </h2>
            <h2 className="text-xl text-center font-semibold underline decoration-primary text-primary">
              Padiglione 10 Stand 173
            </h2>
            <p className="text-center text-lg font-medium">
              Non perdere questa occasione, il tuo futuro inizia qui! Se vuoi
              richiedere informazioni, compila il form qui sotto:
            </p>
          </section>
          <section>
            <Form />
          </section>
          <section className="flex flex-col  lg:flex-row justify-center items-center">
            <Image
              src="/assets/common/logo.png"
              alt="ITS logo"
              width={200}
              height={280}
            />
            <Image
              src="/assets/common/futura.png"
              alt="Futura logo"
              width={280}
              height={280}
            />
          </section>
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
