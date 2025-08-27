import React, { useEffect, useState } from "react";
import Justforyoucard from "../Justforyoucard/Justforyoucard";
const Justforyou = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/justforyou.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="text-black mx-20 mt-10">
      <h2 className="text-4xl font-bold">Just For You</h2>
      <div className="grid grid-cols-4 gap-5 mt-5">
      {
        products.map((product) => <Justforyoucard key={product.id} product={product} />)
      }
      </div>
    </div>
  );
};

export default Justforyou;
