import React from 'react';
import AllFriend from '../app/friends/page';

const GetData = async () => {
    const res = await fetch('https://b13-a07-az.vercel.app/Data.json', {
        cache: 'no-store'
    });

    const datas = await res.json();

    return (
        <div className='grid grid-cols-4 shadow-lg gap-5 w-[1200px] mx-auto'>
            {
                datas.map(data => <AllFriend key={data.id} data={data}></AllFriend>)
            }
        </div>
    );
};

export default GetData;