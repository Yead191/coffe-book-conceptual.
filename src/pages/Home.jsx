import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {
    const categories = useLoaderData()
    // console.log(categories);
    return (
        <div>
            {/* banner */}
            <Banner></Banner>

            {/* header */}
            <Heading title='Browse Coffees by Category' subtitle='Choose your desired coffee category to browse through specific coffees that fit in your taste.'></Heading>

            {/* categories */}
            <Categories categories={categories}></Categories>
            {/*  */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;