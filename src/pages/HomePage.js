import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Profile from '../components/Profile';


function HomePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        <Profile />
        <Carousel />
        </div>
    );

}

export default HomePage;