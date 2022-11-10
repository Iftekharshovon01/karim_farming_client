import React from 'react';
import farming from '../../../Assets/farming.png'

const Banner = () => {
    return (
        <div className="carousel w-4/5 mx-auto py-5 ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={farming} className="w-full rounded" />
            </div>
        </div>
    );
};

export default Banner;