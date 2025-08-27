import React, { useEffect,useState } from 'react';
import Category from '../Category/Category';
const Categories = () => {
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
        .then(response => response.json())
        .then(data => setCategories(data));
    }, []);

    return (
        <div className='flex flex-col text-black mx-20 mt-10'>
            <h2 className="text-4xl font-bold mb-5">Categories</h2>
            <div className='grid grid-cols-5 gap-10 mb-5'>
            {
                categories.map(category => <Category key={category.id} category={category} />)
            }
            </div>
        </div>
    );
};

export default Categories;