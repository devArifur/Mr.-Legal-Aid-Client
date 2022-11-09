import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { img, price, description, title } = useLoaderData();
    const { user } = useContext(AuthContext)
    return (
        <div>
            {/* details section */}
            {/* <div className='grid grid-cols-1 md:grid-cols-2'>
                
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item w-full">
                    <img src={img} alt="Pizza" />
                </div>
            </div>

            <div className="hero w-full" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content">
                    <div className="max-auto">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                        <button className="btn btn-outline">$ {price}</button>
                    </div>
                </div>
            </div>

            </div> */}





<div className="card card-side bg-base-100 shadow-xl">
 <div className='w-full'>
    
  <figure><img src={img} alt="Movie"/></figure>
 </div>
  <div className="card-body w-full">
    <h2 className="card-title text-3xl">{title}</h2>
    <p>{description}.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline w-2/5">$ {price}</button>
    </div>
  </div>
</div>



            {/* review section */}
            <div>
                <p className='text-4xl text-center my-12'>Review section is coming</p>
            </div>

        </div>

    );
};

export default ServiceDetails;