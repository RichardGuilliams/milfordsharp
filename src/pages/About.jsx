import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Intro = () => {
    return (
        <div className='section-main'>
            <title>About Milford Sharpening and Restoration</title>
            <h1>Introduction</h1>
            <p>
                Welcome to Milford Sharpening and Restoration, where precision meets perfection. 
                We specialize in providing top-notch knife sharpening and restoration services to 
                ensure your blades are always at their best.
            </p>
        </div>
    )
}

const OurMission = () => {
    return (
        <div className='section-main'>
            <h2>Our Mission</h2>
            <p>
                Our mission is to deliver the highest quality sharpening and restoration services to our
                clients. We strive to revive the sharpness and longevity of your blades, providing you
                with the precision you need for any culinary or cutting task.
            </p>
        </div>
    )
}

const Story = () => {
    return (
        <div className='section-main'>
            <h2>Our Story</h2>
            <p>
                Milford Sharpening and Restoration was founded this year, born out of a deep passion for blade restoration and maintenance. As a professional cook, I have spent years in various kitchens, becoming the go-to sharpener for my colleagues. This hands-on experience honed my skills and ignited my dedication to the art of knife care.
            </p>
            <p>
                For years, I meticulously maintained my own professional knives, finding great satisfaction in the process. This practice wasn't just a necessity but a passion that grew stronger with time. The turning point came when a few local individuals approached me, impressed by my expertise, and asked if I could sharpen their knives. Their satisfaction and appreciation made me realize the professional value I could offer to my community.
            </p>
            <p>
                Driven by this realization, I decided to turn my passion into a profession, establishing Milford Sharpening and Restoration. Our mission is to provide exceptional sharpening and restoration services, ensuring that every blade we handle is restored to its optimal performance. We take pride in our craftsmanship, dedication, and the positive impact we bring to our customers' daily lives.
            </p>
            <p>
                Our story is just beginning, and we are excited to share our journey with you. At Milford Sharpening and Restoration, we are committed to excellence and passionate about the art of knife care. We look forward to serving you and helping your blades stay sharp and ready for any task.
            </p>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Intro/>
            <OurMission/>
            <Story/>
            <Footer/>
        </div>
    )
}

export default About;