import React from "react";

const Justforyoucard = ({product}) => {
  return (
    <div className="card w-[250px] shadow-5xl rounded-xl hover:shadow-[4px_4px_8px_0_rgba(0,0,0,0.2),_-4px_-4px_8px_0_rgba(0,0,0,0.2)] duration-300">
      <figure>
        <img
          src={product.image}
          alt="Shoes"
          className="w-full h-[200px] object-top"
        />
      </figure>
      <div className=" flex flex-col justify-center p-5 rounded-b-xl gap-2">
        <h2 className="card-title line-clamp-1" title={product.title}>{product.title}</h2>
        <h3>Price: ৳{product.price}</h3>
        <button className="btn bg-white text-[#2fa95b] border-[#2fa95b] hover:bg-[#2fa95b] hover:text-white">Details</button>
        <button className="btn bg-white text-[#2fa95b] border-[#2fa95b] hover:bg-[#2fa95b] hover:text-white">Add to Cart</button>
      </div>
    </div>
  );
};

export default Justforyoucard;
