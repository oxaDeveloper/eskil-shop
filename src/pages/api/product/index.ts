import type { NextApiRequest, NextApiResponse } from "next";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
} from "~/server/lib/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, brand, price, imageUrl, category } = req.body;
    const newProduct = await createProduct(
      name,
      brand,
      price,
      imageUrl,
      category,
    );
    return res.status(201).json(newProduct);
  } else if (req.method === "GET") {
    const getProducts = await getAllProducts();
    return res.status(200).json(getProducts);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    await deleteProduct(id);
    return res.status(200).json({ message: "Product deleted!" });
  }
}
