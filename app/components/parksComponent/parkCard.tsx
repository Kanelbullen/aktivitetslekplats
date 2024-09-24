import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Image from "next/image";

const ParkCard: React.FC<{ id: number; name: string; distance: number; description: string; img: any }> = ({ id, name, distance, img, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-11/12 mx-auto  bg-gray-500 rounded-xl flex flex-col">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full flex-row justify-between px-4 py-2 cursor-pointer"
      >
        <div>{name}</div>
        <div className="flex flex-row">
          <div>{distance}km</div>
          {!isOpen ? <RiArrowDropDownLine size={30} /> : <RiArrowDropUpLine size={30} />}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-700 ease-in-out ${isOpen ? 'max-h-[300px]' : 'max-h-0'}`}
      >
        <div className="flex flex-row gap-3 mx-4 mb-5">
          <Image
            className="w-[40%] h-[13vh] bg-gray-300 rounded-md object-contain"
            src={img}
            alt={name}
          />
          <div className="w-[60%]">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ParkCard;
