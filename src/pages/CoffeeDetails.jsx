import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import neutrition from  '../assets/nutrition.png'
import { addFav } from '../components/utilities';

const CoffeeDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()

    const [isFav, setIsFav]=  useState(false)
    const [coffee, setCoffee] = useState({})
    useEffect(()=> {
        const singleData = data.find(coffee=> coffee.id === parseInt(id))
        setCoffee(singleData)
    }, [id, data ])

    const handleAddFav = (coffee)=>{
        addFav(coffee)
        setIsFav(true)
    }
    

    const {description , image, name, popularity, rating, making_process, ingredients, nutrition_info} = coffee


    return (
        <div className='my-8'>
            {/* description */}
            <h1 className='text-2xl md:text-4xl font-thin mb-6 '>{description}</h1>
            <div className='w-full h-full md:h-[600px] object-cover overflow-hidden rounded-xl shadow-xl '>
                <img className='object-cover w-full h-full ' src={image} alt="" />

            </div>
            <div className='flex justify-between items-center my-6 '>
                <div className=''>
                    <h1 className='text-2xl md:text-3xl font-thin '>{name}</h1>
                    <p className='text-base'>Popularity: {popularity}</p>
                    <p className='text-base'>Rating: {rating}</p>
                </div>
                <div>
                    <button disabled={isFav}  onClick={()=> handleAddFav(coffee)} className='btn btn-warning' > Add Favorite</button>
                </div>

            </div>
            <div className='my-6'>
                <h2 className='text-2xl font-thin '>Making Process: </h2>
                <p className='text-base'>{making_process}</p>
            </div>
            <div className='place-items-end '>
                <img className=' h-[500px] w-[500px]' src={neutrition} alt="" />

            </div>
            
        </div>
    );
};

export default CoffeeDetails;