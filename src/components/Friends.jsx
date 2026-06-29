import React from 'react';
import FriendCard from './FriendCard';

const Friends = async() => {
    const res = await fetch('/friends.json')
    const friends = await res.json()
    return (
        <div>
            <h2>Your Friends</h2>
            {friends.map((friend)=>(
                <FriendCard key={friend.id} friend={friend}></FriendCard>
            ))}
        </div>
    );
};

export default Friends;