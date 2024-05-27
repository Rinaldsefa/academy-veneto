import Header from "@/components/ui/header";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import localFont from "next/font/local";
import { faqs } from "@/constants";

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

export default function Example() {
  return (
    <>
      <Head>
        <title>
          ITS Academy veneto - Alta formazione Post Diploma - Domande frequenti
        </title>
        <meta
          name="description"
          content="Scopri tutti i corsi professionali, specializzati dopo il Diplma e trova subito il lavoro dei tuoi sogni"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/common/4.png" />
      </Head>

      <div
        className={`bg-white overflow-hidden flex flex-col h-screen justify-end ${aileron.className}`}
      >
        <Header />

        <main className="flex flex-col overflow-y-scroll ">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
              <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-primary">
                  Domande frequenti
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                      {({ open }) => (
                        <>
                          <dt>
                            <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                              <span className="text-base font-semibold leading-7 text-primary">
                                {faq.question}
                              </span>
                              <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                  <MinusSmallIcon
                                    className="h-6 w-6 text-primary"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmallIcon
                                    className="h-6 w-6 text-primary"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </DisclosureButton>
                          </dt>
                          <DisclosurePanel as="dd" className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-800">
                              {faq.answer}
                            </p>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
