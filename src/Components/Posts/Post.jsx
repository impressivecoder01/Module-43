import React from 'react';
import { Link } from 'react-router';

const Post = ({data}) => {
    const {title, body} = data
    return (
        <div className='border p-5 m-5'>
            <p>{title}</p>
            <h1>{body}</h1>
            
            <Link to={`/post/${data.id}`}>More Details</Link>
        </div>
    );
};

export default Post;