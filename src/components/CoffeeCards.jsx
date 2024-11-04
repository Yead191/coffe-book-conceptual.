import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {
    const {category} = useParams()
    const data = useLoaderData()
    // console.log(data);
    const navigate = useNavigate()

    const [coffees, setCoffees] = useState([])
    useEffect(()=>{
    if (category) {
        const filterByCategory =   [...data].filter(coffee=> coffee.category === category)
        setCoffees(filterByCategory)
        
    }
    else{
        setCoffees(data.slice(0,6))
    }

    }, [category, data])


    return (
        <>
        <div className='grid grid-cols-1 lg:grid-cols-3  justify-items-center my-8 gap-4' >
            {
                coffees.map(coffee=> <Card key={coffee.id} coffee={coffee} ></Card>)
            }

        </div>
        <button onClick={()=> navigate('/coffees')} className='btn btn-warning my-5'>View All</button>
        </>
        
    );
};

export default CoffeeCards; 