import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate(-1)
    }
    console.log(post)
    const {title, id} = post
    return (
        <div>
            <h1>ddddd</h1>
            <h1>{title}</h1>
            <h1>{id}</h1>
            <button onClick={()=> handleGoBack()}>Go Back</button>
        </div>
    );
};

export default PostDetails;