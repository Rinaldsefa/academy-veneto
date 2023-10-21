import Image from "next/image";
import Province from "./province";
import MapModal from "./modal";
import { useEffect, useState } from "react";

const Map = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  const handleProvinceClick = (province: string) => {
    setSelectedProvince(province);
    setModalOpen(true);
  };

  return (
    <>
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

        <Province
          onClick={() => handleProvinceClick("vicenza")}
          position="top-32 left-16"
          img="/assets/map/vicenza.png"
        />
        <Province
          onClick={() => handleProvinceClick("belluno")}
          position="top-6 left-36"
          img="/assets/map/belluno.png"
        />
        <Province
          onClick={() => handleProvinceClick("padova")}
          position="top-44 left-32"
          img="/assets/map/padova.png"
        />
        <Province
          onClick={() => handleProvinceClick("rovigo")}
          position="-bottom-2 left-32"
          img="/assets/map/rovigo.png"
        />
        <Province
          onClick={() => handleProvinceClick("treviso")}
          position="top-32 right-16"
          img="/assets/map/treviso.png"
        />
        <Province
          onClick={() => handleProvinceClick("venezia")}
          position="top-32 right-6"
          img="/assets/map/venezia.png"
        />
        <Province
          onClick={() => handleProvinceClick("verona")}
          position="top-44 left-2"
          img="/assets/map/verona.png"
        />
      </div>
    </>
  );
};

export default Map;
