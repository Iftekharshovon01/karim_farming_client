import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='py-5'>
                <div className='text-center py-5'>
                    <h2 className='text-5xl font-semibold'>Services</h2>
                </div>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard key={service?._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
            <div className="card-actions justify-center py-5">
                <Link to='/services' ><button className="btn btn-primary">All Services</button></Link>
            </div>
        </div>
    );
};

export default Services;