import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
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
    );
};

export default Services;