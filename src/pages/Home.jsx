import react from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header'
import Footer from '../components/Footer'

const Section1 = () => {
    return (
        <div className='section-main'>
            <h2>Professional Blade Sharpening and Restoration</h2>
            <p>
                Milford Sharpening and Restoration is dedicated to the care and maintenance of knives, 
                scissors, and tools for households and businesses in Milford, Loveland, 
                Miamiville and the surrounding areas. Our meticulous attention to detail 
                and commitment to quality ensure that your personal and professional blades 
                receive the best care possible. We take pride in our customer satisfaction and 
                consistently deliver high-quality results.
            </p>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Section1/>
            <Footer/>
        </div>
    );
};

export default Home;