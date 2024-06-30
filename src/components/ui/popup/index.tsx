import { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { set } from "lodash";
import Circle from "@/components/steps/navigation/circle";
import Image from "next/image";
import { Database } from "supabase/types";
import { supabase } from "supabase/client";
import { useForm } from "react-hook-form";
import Link from "next/link";

//10 minutes
const TIMEOUT = 30000;

export default function PopUp() {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Database["public"]["Tables"]["leads"]["Row"]>();

  //open the dialog after 10 minutes

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, TIMEOUT);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  async function insertData(
    data: Database["public"]["Tables"]["leads"]["Row"]
  ) {
    try {
      const client = supabase();

      await client.from("leads").insert({ ...data, source: "popup" });
      alert("Grazie per averci contattato, ti risponderemo al più presto!");
    } catch (error) {
      alert(error);
    }
  }

  console.log(errors);

  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Image
                      alt="nav"
                      src="/assets/common/4.png"
                      width={24}
                      height={24}
                      className="w-full"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-purple"
                    >
                      Restiamo in contatto!
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Ciao! Se vuoi essere ricontattato per sapere più info,
                        lasciaci la tua email
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-5 sm:my-6">
                  <form onSubmit={handleSubmit(insertData)}>
                    <div className="my-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("email", {
                            required: "Inserisci un'email valida",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Inserisci un'email valida",
                            },
                          })}
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="you@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="privacy"
                          aria-describedby="privacy-description"
                          type="checkbox"
                          {...register("privacy", {
                            required:
                              "Devi accettare l'informativa sulla privacy",
                          })}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-5">
                        <p id="privacy-description" className="text-gray-500">
                          Confermo di aver preso visione della{" "}
                          <Link
                            href="https://www.iubenda.com/privacy-policy/34668176/full-legal"
                            target="_blank"
                            className="text-primary underline"
                          >
                            informativa sulla privacy
                          </Link>
                        </p>
                        {errors.privacy && (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                          >
                            {errors.privacy.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-2xl bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Invia
                    </button>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
