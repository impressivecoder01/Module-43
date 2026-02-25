import React, { use } from 'react';

const UserDetailsTwo = ({userPromise}) => {
    const user = use(userPromise)
    console.log(user)
    return (
        <div>
            
            <p>{user.name}
            </p>
        </div>
    );
};

export default UserDetailsTwo;