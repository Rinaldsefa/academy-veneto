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
            <h1 className=" text-2xl text-center font-semibold ">
              Shaping futures in Veneto
            </h1>

            <h2 className=" text-3xl text-center font-bold ">
              AlTA FORMAZIONE POST DIPLOMA
            </h2>
            <h2 className="text-xl text-center font-semibold underline decoration-primary text-primary">
              vieni a trovarci allo stand Padiglione 10 - stand 173{" "}
            </h2>
            <p className="text-center text-lg font-medium">
              Presso lo stand di ITS ACADEMY VENETO, Partecipa al quiz di
              orientamento sugli ITS: premi fantastici per i vincitori e
              un’occasione unica per avvicinarsi al mondo del lavoro, ogni
              giorno alle 10, 11, 12, 15 e 16!
            </p>
            <p className="text-center text-lg font-medium">
              Sezione Grandi Eventi: Auditorium Sala Verdi 29 novembre
              10:30-13:00 - IT’S The Future. Il futuro degli ITS: Scopri le
              opportunità offerte dagli ITS per il tuo futuro professionale.
            </p>
            <p className="text-center text-lg font-medium text-primary">
              Non perdere l’occasione di partecipare a questi eventi imperdibili
              per il tuo futuro!
            </p>
            <p className="text-center text-lg font-medium">
              Partecipa ai nostri laboratori esperienziali ogni giorno presso lo
              stand di Regione Veneto
            </p>
          </section>
          <section className="flex flex-wrap justify-center items-center">
            <Image
              src="/assets/orienta/2.png"
              alt="ITS logo"
              width={600}
              height={680}
            />
            <Image
              src="/assets/orienta/3.png"
              alt="ITS logo"
              width={600}
              height={680}
            />
            <Image
              src="/assets/orienta/4.png"
              alt="ITS logo"
              width={600}
              height={680}
            />
            <Image
              src="/assets/orienta/5.png"
              alt="ITS logo"
              width={600}
              height={680}
            />
          </section>
          <section>
            <h5 className="text-center font-semibold text-primary text-xl ">
              Se sei interessato, lasciaci i tuoi dati: verrai ricontattato il
              prima possibile!
            </h5>
            <Form />
          </section>
          <section className="flex flex-col lg:flex-row justify-center items-center">
            <Image
              src="/assets/orienta/cover.png"
              alt="ITS logo"
              width={400}
              height={480}
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
