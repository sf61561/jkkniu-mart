import React from 'react';

const Category = ({category}) => {
    return (
        <div>
            <button key={category.id} className="btn h-[120px] w-[200px] flex flex-col items-center justify-center bg-white text-black gap-3 border-[#2fa95b]">
                <img src={`${category.image}`} alt={category.name} className="w-[50px] h-[50px] mr-2" />
                <h2 className='text-[#2fa95b]'>{category.name}</h2>
            </button>
        </div>
    );
};

export default Category;