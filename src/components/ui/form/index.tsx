import { EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid";

export default function Form() {
  return (
    <div className="w-full max-w-6xl my-8 flex flex-col gap-2">
      <h5 className="text-center ">
        <span className="block text-xl font-semibold text-gray-900">
          Vuoi saperne di più o sei indeciso su quale corso scegliere?
        </span>
        <span className="block text-md text-gray-500">
          Lasciaci i tuoi dati, ti contatteremo noi al più presto!
        </span>
      </h5>
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
            name="name"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Mario rossi"
          />
        </div>
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
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
        </div>
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
            type="phone"
            name="phone"
            id="phone"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="3400000000"
          />
        </div>
      </div>

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
            name="note"
            id="note"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Invia
        </button>
      </div>
    </div>
  );
}
