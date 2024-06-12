import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import TopPart from "~/components/TopPart";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Filter from "~/components/Filter";
import HeroProduct from "~/components/HeroProduct";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    await axios.get(`/api/product`).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mx-auto">
      <TopPart />

      <main>
        <div className="flex justify-center">
          <h1 className="text-[4rem] font-medium">ESKIL®</h1>
        </div>

        <Navbar />

        <div>
          <div className="grid grid-cols-2 grid-rows-2 gap-5 ">
            {products.map((product: any, idx) => (
              <HeroProduct key={product.id} {...product} idx={idx} />
            ))}
          </div>

          <div className="my-24 flex justify-center">
            <p className="max-w-[40rem] text-center text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ratione vitae aspernatur. Id cumque voluptate iure,
              praesentium sed totam necessitatibus.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <Filter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product: any) => {
              if (
                activeCategory === product.category ||
                activeCategory === null
              ) {
                return <ProductCard key={product.id} {...product} />;
              }
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
