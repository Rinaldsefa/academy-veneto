import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "supabase/client";
import { Database } from "supabase/types";

const courses = [
  { id: 1, name: "ITS Academy Meccatronico Veneto" },
  { id: 2, name: "ITS Digital Academy Mario Volpato" },
  { id: 3, name: "ITS Academy Last" },
  { id: 4, name: "ITS Academy Marco Polo" },
  { id: 5, name: "ITS Cosmo" },
  { id: 6, name: "IST Academy Turismo Veneto " },
  { id: 7, name: "ITS Academy Agroalimentare Veneto" },
  { id: 8, name: "ITS Red" },
];

export default function Form() {
  const [selected, setSelected] = useState(courses[0]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Database["public"]["Tables"]["leads"]["Row"]>();

  async function insertData(
    data: Database["public"]["Tables"]["leads"]["Row"]
  ) {
    try {
      const client = supabase();
      await client.from("leads").insert({ ...data, course: selected.name });
      alert("Grazie per averci contattato, ti risponderemo al più presto!");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="w-full max-w-6xl my-8 flex flex-col gap-2">
      <form onSubmit={handleSubmit(insertData)}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-primary"
          >
            Nome e Cognome
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              {...register("name", { required: "Inserisci un nome" })}
              id="name"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Mario rossi"
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              Inserisci un nome
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-primary"
          >
            Email
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <EnvelopeIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="email"
              {...register("email", {
                required: "Inserisci un email valida",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Inserisci un email valida",
                },
              })}
              id="email"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-primary"
          >
            Cellulare
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="tel"
              {...register("phone", {
                required: "Inserisci un numero di telefono valido",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Inserisci un numero di telefono valido",
                },
              })}
              id="phone"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="3400000000"
            />
          </div>
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {errors.phone.message}
            </p>
          )}
        </div>

        <Listbox value={selected} onChange={setSelected}>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-primary"
          >
            Selezione ITS
          </label>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  aria-hidden="true"
                  className="size-5 text-gray-400"
                />
              </span>
            </ListboxButton>

            <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm">
              {courses.map((course) => (
                <ListboxOption
                  key={course.id}
                  value={course}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                >
                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                    {course.name}
                  </span>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="size-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>

        <div>
          <label
            htmlFor="note"
            className="block text-sm font-medium leading-6 text-primary"
          >
            Note
          </label>
          <div className="mt-2">
            <textarea
              rows={4}
              {...register("note")}
              id="note"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
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
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {errors.privacy.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Invia
          </button>
        </div>
      </form>
    </div>
  );
}
