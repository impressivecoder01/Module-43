import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css'
const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex'>
            <SideBar></SideBar>
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;


// use : usersPromise > suspense > promise > use(userPromise)
// [less used so far] > useState + useEffect (() => {}, [])
// load data before router component is rendered