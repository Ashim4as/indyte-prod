import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
// import Statistics from '../components/Statistics';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import CounterSection from '../components/CounterSection';
import AboutUs from '../components/AboutUs';
import Diet from '../components/Diet';
import Plans from '../components/plans';
import Testimonial from '../components/Testimonial'; // Import the new Testimonial component

const Home = () => {
    return (
        <>
            <Hero />
            <CounterSection /> 
            <AboutUs />
            <Plans />
            <Diet />
            {/* <Statistics /> */}
            {/* <Intro /> */}
            {/* <Services /> */}
            <Testimonial /> {/* Add the Testimonial component here */}
            <Portfolio />
            {/* <Clients /> */}
            <Cta/>
            <Footer />
        </>
    )    
}

export default Home;

