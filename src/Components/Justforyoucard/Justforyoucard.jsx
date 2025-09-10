import React from "react";
import { useCart } from "../Context/CartContext";

const Justforyoucard = ({ product }) => {
  const { cart, setCart } = useCart();
  const handleCart = (product) => {
    const newCart = [...cart, product];
    const cart1 = Array.from(
      new Map(newCart.map(item => [item.id, item])).values()
    );
    setCart(cart1);
  }
  return (
    <div className="card w-[250px] h-[400px] shadow-5xl rounded-xl hover:shadow-[4px_4px_8px_0_rgba(0,0,0,0.2),_-4px_-4px_8px_0_rgba(0,0,0,0.2)] duration-300">
      <figure>
        <img
          src={product.image}
          alt="Shoes"
          className="w-full h-[200px] object-top"
        />
      </figure>
      <div className=" flex flex-col justify-center p-5 rounded-b-xl gap-2">
        <h2 className="card-title line-clamp-1" title={product.title}>
          {product.title}
        </h2>
        <h3>Price: ৳{product.price}</h3>
        <button
          className="btn bg-white text-[#2fa95b] border-[#2fa95b] hover:bg-[#2fa95b] hover:text-white"
          onClick={() => document.getElementById(`modal_${product.id}`).showModal()}
        >
          Details
        </button>
        <button className="btn bg-white text-[#2fa95b] border-[#2fa95b] hover:bg-[#2fa95b] hover:text-white" onClick={() => handleCart(product)}>
          Add to Cart
        </button>
      </div>
      <dialog id={`modal_${product.id}`} className="modal">
        <div className="modal-box bg-white h-125 text-black">
          <form method="dialog">
            <button className="btn btn-sm btn-circle bg-white text-black hover:bg-[#2fa95b] border-0 hover:text-white absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img
            src={product.image}
            alt="Shoes"
            className="w-full h-[300px] object-top"
          />
          <h2 className="font-bold text-2xl">{product.title}</h2>
          <p className="font-semibold text-lg mt-2">Price: ৳{product.price}</p>
          <p className="font-semibold text-md mt-2">Description:</p>
          <p className="mt-1">{product.description}</p>
        </div>
      </dialog>
    </div>
  );
};

export default Justforyoucard;
