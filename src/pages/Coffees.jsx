import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffees = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)

    const handleSort = (sortBy)=>{
        if (sortBy === 'popularity') {
            //sort by popularity
            const sorted = [...data].sort((a, b)=> b.popularity - a.popularity)
            setCoffees(sorted)
            
        }
        else if (sortBy === 'rating') {
            //sort by rating
            const sortedRating = [...data].sort((a, b)=> b.rating - a.rating)
            setCoffees(sortedRating)
        }

    }

    return (
        <>
            <div className='flex justify-between items-center mb-12 mt-4'>
                <div>
                    <h1 className='text-3xl font-thin'>Sort Coffee's by Popularity & Ratings</h1>
                </div>
                <div className='space-x-4'>
                    <button onClick={()=> handleSort('popularity')} className='btn btn-warning text-sm'>Sort by Popularity</button>
                    <button onClick={()=> handleSort('rating')} className='btn btn-warning text-sm'>Sort by Rating</button>

                </div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3  justify-items-center my-8 gap-4' >
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee} ></Card>)
                }

            </div>
        </>
    );
};

export default Coffees;