import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {
    const [user, setUser] = React.useState(null);
        useEffect(() => {
            fetch("http://localhost:5000/", { credentials: 'include' })
                .then(response => response.json())
                .then(data => setUser(data.user))
                .catch(error => console.error("Error fetching data:", error));
        }, []);
    return (
        <div>
            <NavLink to={`${user ? `/products/category/${category.name}` : '/login'}`}><button key={category.id} className="btn h-[120px] w-[200px] flex flex-col items-center justify-center bg-white text-black gap-3 border-[#2fa95b]">
                <img src={`${category.image}`} alt={category.name} className="w-[50px] h-[50px] mr-2" />
                <h2 className='text-[#2fa95b]'>{category.name}</h2>
            </button></NavLink>
        </div>
    );
};

export default Category;