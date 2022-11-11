import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, name, price, details } = service;
    return (
        <div className="card card-compact text-white w-96 bg-emerald-500 shadow-xl py-2">
            <figure><img className='h-60   rounded' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>Price:{price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Service Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;