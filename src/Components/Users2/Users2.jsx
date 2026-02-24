import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const data = use(usersPromise)
    console.log(data)
    return (
        <div>
            <p>This is users two </p>
        </div>
    );
};

export default Users2;