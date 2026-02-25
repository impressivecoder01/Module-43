import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    console.log(post)
    const {title, id} = post
    return (
        <div>
            <h1>ddddd</h1>
            <h1>{title}</h1>
            <h1>{id}</h1>
        </div>
    );
};

export default PostDetails;