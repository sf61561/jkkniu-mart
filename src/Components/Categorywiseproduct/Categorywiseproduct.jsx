import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Justforyoucard from '../Justforyoucard/Justforyoucard';

const Categorywiseproduct = () => {
    const navigate = useNavigate();
    const { id } =useParams();
    console.log(id);
    const [products, setProducts] = useState([]);
      useEffect(() => {
        fetch(`http://localhost:5000/products/category/${id}`)
          .then((response) => response.json())
          .then((data) => {
            if (Array.isArray(data)) {
                setProducts(data); 
            } else {
                setProducts([]); 
                console.error("Server error:", data.error);
            }
          })
          .catch((err) => {
            console.error("Fetch error:", err);
            setProducts([]); // fallback to avoid crash
            });
      }, []);
      console.log(products);
      const handleLogout = () => {
        // Implement logout functionality here
        console.log("Logging out...");
        fetch("http://localhost:5000/logout",{
        credentials: "include"
        })
        .then(navigate('/'))
        .catch(error => console.error("Error:", error));
    }
    const [user, setUser] = React.useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/", { credentials: 'include' })
            .then(response => response.json())
            .then(data => setUser(data.user))
            .catch(error => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className='text-black'>
            <div className="flex items-center justify-between h-[80px] shadow-sm">
                <img
                    className="w-[250px]"
                    src="https://i.ibb.co.com/21wfxvqB/Logo-maker-project-removebg-preview1.png"
                    alt="Jkkniu-Mart"
                />
                <div className={`flex items-center gap-10 mr-20 ${user ? '' : 'hidden'}`}>
                    <span className={`text-[#2fa95b] font-bold ${user ? '' : 'hidden'}`}>{user}</span>
                    <button className={`btn text-black bg-white border-0 shadow-none ${user ? '' : 'hidden'}`} onClick={handleLogout}>Log Out</button>
                </div>
            </div>
            <div className={`${!(products.length===0) ? "grid grid-cols-4" : "flex"} gap-5 mt-5 mx-10 min-h-[calc(100vh_-_100px)] bg-white`}>
                {
                    products.length === 0 ? (<h2 className='text-3xl text-center flex items-center justify-center w-[calc(100vw_-_40px)]'>No products found in this category</h2>) : products.map((product) => <Justforyoucard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Categorywiseproduct;