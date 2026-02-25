import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({data}) => {
    const {title, body} = data;
    
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/post/${data.id}`)
    }
    return (
        <div className='border p-5 m-5'>
            <p>{title}</p>
            <h1>{body}</h1>
            
            <Link to={`/post/${data.id}`}>More Details</Link>
            <button onClick={()=> handleNavigate()}>Details of : {data.id}</button>
        </div>
    );
};

export default Post;