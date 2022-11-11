import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const [service] = useLoaderData();
    const { name, img, details, price } = service;
    return (
        <div className="card justify-center card-compact text-white w-96 bg-emerald-500 shadow-xl py-2">
            <figure><img className='h-60   rounded' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>Price:{price}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;