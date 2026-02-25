// import React, { use } from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    const {name, username, email, website} = user
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