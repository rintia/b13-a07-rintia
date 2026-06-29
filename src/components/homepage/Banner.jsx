import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className="  max-w-[1200px] mx-auto">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="btn btn-success"><FaPlus />Add a Friend</button>
                </div>
            </div>
            <div className='grid grid-cols-4 my-5 gap-5'>
                <div className='py-10 shadow-2xl bg-base-300 rounded-lg text-center'>
                    <h1 className='font-bold text-green-950'>10</h1>
                    <p>Total friends</p>
                     </div>

                     <div className='py-10 shadow-2xl bg-base-300 rounded-lg text-center'>
                    <h1 className='font-bold text-green-950'>3</h1>
                    <p>On Track</p>
                </div>

                 <div className='py-10 shadow-2xl bg-base-300 rounded-lg text-center'>
                    <h1 className='font-bold text-green-950'>6</h1>
                    <p>Need Attention</p>
                </div>

                 <div className='py-10 shadow-2xl bg-base-300 rounded-lg text-center'>
                    <h1 className='font-bold text-green-950'>10</h1>
                    <p>Interactions This Month</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;