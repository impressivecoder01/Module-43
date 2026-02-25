import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetailsTwo from '../UserDetailsTwo/UserDetailsTwo';

const User = ({user}) => {
    const [showInfo, setShowInfo] = useState(false)
    const {name, email, phone, address, id} = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
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
           <button onClick={() => setShowInfo(!showInfo)} className='m-8'>{showInfo? 'Hide' : 'Show Info'}</button>
           {
            showInfo && <Suspense fallback={'Loading...'}>
                <UserDetailsTwo userPromise={userPromise}></UserDetailsTwo>
            </Suspense>
           }
        </div>
    );
};

export default User;