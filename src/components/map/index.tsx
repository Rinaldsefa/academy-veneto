import Image from "next/image";
import ProvinceMap from "./province";
import MapModal from "./modal";
import { FC, useMemo, useState } from "react";
import { Province } from "@/types/course";
import { courses, provinces } from "@/constants";
import Cta from "../ui/cta";
import { map } from "lodash";
import Link from "next/link";
import { ArrowDownCircleIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

type MapProps = {
  displayList: boolean;
};

const Map: FC<MapProps> = ({ displayList }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<
    Province | undefined
  >();

  const handleProvinceClick = (province: string) => {
    const selectedProvince = provinces.find((p) => p.id === province);
    setSelectedProvince(selectedProvince);
    if (!displayList) {
      setModalOpen(true);
    }
  };

  const provinceList = useMemo(() => {
    if (selectedProvince) {
      return provinces.filter(
        (province) => province.id === selectedProvince.id
      );
    }
    return provinces;
  }, [selectedProvince]);

  return (
    <section className="flex flex-col justify-center items-center">
      <h4 className="text-center text-xs md:text-lg font-bold my-4">
        Seleziona la tua provincia e scopri i corsi ITS vicino a te:
      </h4>
      <MapModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        province={selectedProvince}
      />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
        <div className="relative w-80 h-80 my-5 ">
          <Image
            alt=""
            width={500}
            height={500}
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
        {displayList && (
          <div className="h-[400px] overflow-y-auto w-full  flex-1 md:pl-10 relative">
            <ArrowDownCircleIcon className="h-8 w-8 absolute text-primary top-1 right-4 z-40" />
            {provinceList.map(({ label, courses }) => (
              <div key={label} className="relative shadow-2xl">
                <div className="shadow-2xl sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-1.5 text-lg font-semibold leading-6 text-black flex justify-between">
                  <h3>{label}</h3>
                </div>

                <ul className="px-3 py-1.5">
                  {courses.map(({ label, list, href }) => (
                    <li key={label} className="divide-y divide-gray-100 py-1">
                      <Link
                        href={href}
                        className="text-primary font-semibold underline"
                      >
                        {label}
                      </Link>
                      <ul>
                        {list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <h4 className="text-center text-xs md:text-lg font-bold my-4">
        Sei indeciso su quale sia il percorso più adatto a te?
      </h4>

      <Cta text={"Fai il quiz"} classes="mt-8 bg-sky-500" href="/test" />
    </section>
  );
};

export default Map;
