import React, { useEffect, useState } from "react";
import Justforyoucard from "../Justforyoucard/Justforyoucard";
const Justforyou = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="text-black mx-20 mt-10">
      <h2 className="text-4xl font-bold">Just For You</h2>
      <div className="grid grid-cols-4 gap-5 mt-5">
      {
        products.length > 0 ? products.map((product) => <Justforyoucard key={product.id} product={product} />) : <p>No products found</p>
      }
      </div>
    </div>
  );
};

export default Justforyou;
