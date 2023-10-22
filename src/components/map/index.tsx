import Image from "next/image";
import ProvinceMap from "./province";
import MapModal from "./modal";
import { useState } from "react";
import { Province } from "@/types/course";
import { provinces } from "@/constants";
import Cta from "../ui/cta";

const Map = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<
    Province | undefined
  >();

  const handleProvinceClick = (province: string) => {
    const selectedProvince = provinces.find((p) => p.id === province);
    setSelectedProvince(selectedProvince);
    setModalOpen(true);
  };

  return (
    <section>
      <h4 className="text-center text-xs md:text-lg font-bold my-4">
        Seleziona la tua provincia e scopri i corsi ITS vicino a te:
      </h4>
      <MapModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        province={selectedProvince}
      />
      <div className="relative w-80 h-80 my-5">
        <Image
          alt=""
          width={300}
          height={300}
          className="absolute w-full h-full z-10"
          src="/assets/map/base.png"
        />

        <ProvinceMap
          onClick={() => handleProvinceClick("vicenza")}
          position="top-32 left-16"
          img="/assets/map/vicenza.png"
        />
        <ProvinceMap
          onClick={() => handleProvinceClick("belluno")}
          position="top-6 left-36"
          img="/assets/map/belluno.png"
        />
        <ProvinceMap
          onClick={() => handleProvinceClick("padova")}
          position="top-44 left-32"
          img="/assets/map/padova.png"
        />
        <ProvinceMap
          onClick={() => handleProvinceClick("rovigo")}
          position="-bottom-2 left-32"
          img="/assets/map/rovigo.png"
        />
        <ProvinceMap
          onClick={() => handleProvinceClick("treviso")}
          position="top-32 right-16"
          img="/assets/map/treviso.png"
        />
        <ProvinceMap
          onClick={() => handleProvinceClick("venezia")}
          position="top-32 right-6"
          img="/assets/map/venezia.png"
        />
        <ProvinceMap
          onClick={() => handleProvinceClick("verona")}
          position="top-44 left-2"
          img="/assets/map/verona.png"
        />
      </div>

      <Cta text={"Fai il quiz"} classes="mt-8 bg-sky-500" href="/test" />
    </section>
  );
};

export default Map;
