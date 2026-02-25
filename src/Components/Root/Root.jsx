import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css'
const Root = () => {
    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location) 
    return (
        <div>
            <Header></Header>
            <div className='flex'>
            <SideBar></SideBar>
            {isNavigating && <p>Loading....</p>}
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