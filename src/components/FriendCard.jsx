import React from 'react';

const FriendCard = ({friend}) => {
//       {
//     "id": 8,
//     "name": "James Patel",
//     "picture": "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
//     "email": "james.patel@example.com",
//     "days_since_contact": 15,
//     "status": "due soon",
//     "tags": ["startup", "tech"],
//     "bio": "Met at a tech meetup and now regularly discuss startup ideas.",
//     "goal": 16,
//     "next_due_date": "2026-05-11"
//   }
    return (
        <div>
        <figure className="">
        <Image src={friend.picture} alt={friend.name} height={200} width={200} className="h-50 w-auto" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{friend.name}</h2>
        <div className="flex justify-between items-center gap-4">
          <span className="bg-green-100 text-green-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
            <h2>{friend.days_since_contact}d ago</h2>
          </span>
          <span className="bg-orange-100 text-orange-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
           {friend.tag}
          </span>
        </div>
      </div>
        </div>
    );
};

export default FriendCard;