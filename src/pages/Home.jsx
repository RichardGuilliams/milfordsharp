import react from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header'
import Footer from '../components/Footer'

const Section1 = () => {
    return (
        <div className='section-main'>
            <title>Professional Knife Sharpening Services in Milford and Loveland, OH</title>
            <h1>Professional Blade Sharpening and Restoration</h1>
            <p>
                Milford Sharpening and Restoration is dedicated to the care and maintenance of knives, 
                scissors, and tools for households and businesses in Milford, Loveland, 
                Miamiville and the surrounding areas. Our meticulous attention to detail 
                and commitment to quality ensure that your personal and professional blades 
                receive the best care possible. We take pride in our customer satisfaction and 
                consistently deliver high-quality results.
            </p>
            <p>
                Started in July of 2024, with over 6 years of experience sharpening knives for personal and
                professional use, we are dedicated to ensuring that your knives have a razor sharp edge that will make 
                your daily cutting tasks safer and more satisfying.
            </p>
            <p>With Milford Sharpening and Restoration, your knives and tools will receive the same care and treatment we give our own knives. Handling each blade with the highest amount of respect and expertise possible.
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