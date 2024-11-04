import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { getAllFav, removeFav } from '../components/utilities';
import Card from '../components/Card';


const Dashboard = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const fav = getAllFav()
        setCoffees(fav)
    }, [])

    const handleRemove = (id)=>{
        removeFav(id)
        const fav = getAllFav()
        setCoffees(fav)

    }
    return (
        <div>
            <Heading title='Welcome to Dashboard' subtitle='Manage coffees that you have previously added as favorite. You can view or remove them from here.'></Heading>

            <div className='grid grid-cols-1 lg:grid-cols-3  justify-items-center my-8 gap-4' >
                {
                    coffees.map(coffee => <Card handleRemove={handleRemove}  key={coffee.id} coffee={coffee} ></Card>)
                }

            </div>
        </div>

    );
};

export default Dashboard;