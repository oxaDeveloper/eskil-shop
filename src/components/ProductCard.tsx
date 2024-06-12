import Image from "next/image";
import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-[25rem] w-[25rem] justify-center bg-gray-200 p-5">
        <Image
          src={imageUrl}
          alt={name}
          width={1080}
          height={1080}
          className="object-cover"
        />
      </div>

      <div className="mt-2 flex w-full items-center justify-between px-2">
        <h2 className="max-w-[15rem] text-xl font-semibold">{name}</h2>
        <p className="text-xl">${price.toFixed(2)}</p>
      </div>

      <div className="mt-5 w-full px-2">
        <button className="text-lg font-bold uppercase">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
