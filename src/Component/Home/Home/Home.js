import React from 'react';
import AllUsers from '../../Admin/AllUsers/AllUsers';
import Banner from '../Banner/Banner';
import Plans from '../Plans/Plans';
import Sponsors from '../Sponsors/Sponsors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Plans></Plans>
            <Sponsors></Sponsors>
            <AllUsers></AllUsers>
        </div>
    );
};

export default Home;