import React from 'react';
import { Link } from "react-router-dom";

function UserCard(props) {
    const { userObject } = props;
    return (
        <div key={userObject.id}>
            <Link  className="flex gap-3 border-2" to={`/${userObject.id}`}>
                {/* Render user data here */}
                <img src={userObject.userData.profile_pic} alt="" className="rounded-full h-10 w-10 " />
                {/* ... other user data */}
                <h2>{userObject.userData.name}</h2>
            </Link>
        </div>
        
    )
}

export default UserCard