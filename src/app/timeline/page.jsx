"use client";
import { SummaryContext } from '@/context/SummaryContext';
import React, { useContext } from 'react';

const FinalSummary = () => {
    const { summary, setSummary } = useContext(SummaryContext);
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Timeline</h1>
            <button className='btn btn-ghost'>Filter Time Line</button>
            <div>
                {
                    summary.map((item, index) => (

                        <div key={index} className='border p-4 my-2 flex m-4 rounded-lg shadow-sm'>
                                {
                                    item.action === "Call" ?<span role="img" aria-label="call" className='text-7xl'>📞</span> :
                                    item.action === "Text" ?<span role="img" aria-label="message" className='text-7xl'>💬</span> :
                                    <span role="img" aria-label="meeting" className='text-7xl'>👥</span>
                                }
                            <div className='flex flex-col pl-5'>
                                <p><strong>Friend:</strong> {item.friendName}</p>
                            <p><strong>Action:</strong> {item.action}</p>
                            <p><strong>Date:</strong> {item.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default FinalSummary;