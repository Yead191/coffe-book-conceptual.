import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    // console.log(categories);
    
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories.map(category=>(
                <NavLink key={category.category} to={`/category/${category.category}`}  role="tab" className={({isActive})=> `tab ${isActive? 'tab-active  lg:text-xl font-semibold whitespace-nowrap':'whitespace-nowrap'} `}>{category.category}</NavLink>))
            }
            
        </div>
    );
};

export default Categories;