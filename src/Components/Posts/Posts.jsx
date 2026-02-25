import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const datas = useLoaderData()
   
    return (
        <div>
           <h1>This is my post component</h1>
           <p>{datas.length}</p> 
           {
            datas.map(data => <Post key={data.id} data = {data}></Post>)
           }
        </div>
    );
};

export default Posts;<h1>This is my post component</h1>