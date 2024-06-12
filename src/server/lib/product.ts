import { db } from "~/server/db";

export const createProduct = async (
  name: string,
  brand: string,
  price: number,
  imageUrl: string,
  category: string,
) => {
  const product = await db.product.create({
    data: {
      name,
      brand,
      price,
      imageUrl,
      category,
    },
  });
  return product;
};

export const getAllProducts = async () => {
  const products = await db.product.findMany();
  return products;
};

export const deleteProduct = async (id: any) => {
  const product = await db.product.delete({
    where: { id: id },
  });
  return product;
};
