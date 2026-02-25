// import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    const {name, username, email, website} = user
    const {userId} = useParams()
    console.log(userId)
    return (
        <div>
            <h1>This is users details for user</h1>
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
                <p>{website}</p>
        </div>
    );
};

export default UserDetails;