import Image from "next/image";
import Province from "./province";

const Map = () => {
  return (
    <div className="relative w-80 h-80 my-5">
      <Image
        alt=""
        width={300}
        height={300}
        className="absolute w-full h-full z-10"
        src="/assets/map/base.png"
      />

      <Province position="top-32 left-16" img="/assets/map/vicenza.png" />
      <Province position="top-6 left-36" img="/assets/map/belluno.png" />
      <Province position="top-44 left-32" img="/assets/map/padova.png" />
      <Province position="-bottom-2 left-32" img="/assets/map/rovigo.png" />
      <Province position="top-32 right-16" img="/assets/map/treviso.png" />
      <Province position="top-32 right-6" img="/assets/map/venezia.png" />
      <Province position="top-44 left-2" img="/assets/map/verona.png" />
    </div>
  );
};

export default Map;
