import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTrash } from "react-icons/fa6";
import { removeFav } from './utilities';


const Card = ({ coffee , handleRemove }) => {
    const { pathname } = useLocation()
    const { name, image, category, origin, rating, popularity, type, id } = coffee || {}

    
    return (
        <div className=' flex flex-col relative w-full'>
            <Link to={`/coffee/${id}`} className='transition hover:scale-105 shadow-xl overflow-hidden rounded-xl '>
                <figure className='rounded-t-xl w-full h-52 overflow-hidden'>
                    <img className='w-full' src={image} alt="" />
                </figure>
                <div className='p-4'>
                    <h1 className="text-2xl font-semibold font-serif">Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popularity: {popularity}</p>

                </div>
            </Link>
            {
                pathname === '/dashboard' &&
                <div onClick={()=>handleRemove(id)} className='absolute -top-5 -right-3 text-2xl  p-3 bg-yellow-400 rounded-full cursor-pointer hover:scale-125 transition'><FaTrash />
                </div>
            }
        </div>
    );
};

export default Card;