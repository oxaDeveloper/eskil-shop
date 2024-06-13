import Image from "next/image";
import React from "react";

interface ProductCardProps {
  name: string;
  brand: string;
  imageUrl: string;
  idx: number;
}

const HeroProduct: React.FC<ProductCardProps> = ({
  name,
  brand,
  imageUrl,
  idx,
}) => {
  return (
    <div
      className={`bg-gray-200 p-5 ${idx === 0 ? "row-span-2" : idx === 2 && "col-start-2"}`}
    >
      <div className="mt-2 flex w-full flex-col items-start justify-between px-2">
        <h2 className="max-w-[15rem] text-xl uppercase">{name}</h2>
        <p className="text-base font-semibold">by {brand}</p>
      </div>

      <div className={`flex justify-center bg-gray-200 p-5`}>
        <Image
          src={imageUrl}
          alt={name}
          width={1080}
          height={1080}
          className={`object-cover ${idx !== 0 && "w-[12rem]"}`}
        />
      </div>
    </div>
  );
};

export default HeroProduct;
