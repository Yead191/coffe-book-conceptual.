import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <div className='flex-grow mt-28 w-11/12 lg:w-10/12 mx-auto mb-12'>
                <Outlet></Outlet>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;


{/* <div className='min-h-[calc(100vh-232px)]'></div> */}