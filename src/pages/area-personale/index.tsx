import Header from "@/components/ui/header";
import { supabase } from "supabase/client";
export default function AreaPersonale() {
  const downloadCsv = async () => {
    try {
      const client = supabase();

      const { data, error } = await client
        .from("leads")
        .select()
        .order("id", { ascending: false })
        .csv();
      if (data) {
        const csvData = new Blob([data], { type: "text/csv" });
        const csvURL = URL.createObjectURL(csvData);
        const link = document.createElement("a");
        link.href = csvURL;
        link.download = `leads.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className={`bg-white overflow-hidden flex flex-col h-screen`}>
        <Header />

        <div className="flex flex-col justify-center items-center w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => downloadCsv()}
          >
            Scarica csv
          </button>
        </div>
      </div>
    </>
  );
}
