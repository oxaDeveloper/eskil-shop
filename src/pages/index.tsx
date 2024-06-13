import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import TopPart from "~/components/TopPart";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Filter from "~/components/Filter";
import HeroProduct from "~/components/HeroProduct";
import Subscribe from "~/components/Subscribe";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [randomProducts, setRandomProducts] = useState<any[]>([]);
  const [products, setProducts] = useState([]);

  const getRandomProducts = (products: any) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const result = shuffled.slice(0, 3);
    setRandomProducts(result);
  };

  const fetchProduct = async () => {
    await axios.get(`/api/product`).then((res) => {
      setProducts(res.data);
      getRandomProducts(res.data);
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
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {randomProducts.map((product: any, idx) => (
              <HeroProduct key={idx} {...product} idx={idx} />
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

          <div className="grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
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

      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
