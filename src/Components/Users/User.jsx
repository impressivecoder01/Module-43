import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name, email, phone, address} = user;
    const userStyle = {
        border: '2px solid yellow', 
        borderRadius: '20px' ,
        margin: '5px'
    }
    return (
        <div style={userStyle}>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <h1>{address.city}</h1>
            <Link to={`/users/${user.id}`}>Show Details</Link>
        </div>
    );
};

export default User;