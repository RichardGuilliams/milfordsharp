import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


const Section1 = () => {
    return (
        <div className='section-main'>
            <h2>Contact Us</h2>
            <p>Please call us at <a href="tel:+9703076557">(970)307-6557</a> for a free estimate.</p>
            <p>or email us at <a href="mailto:milfordsharp@gmail.com">milfordsharp@gmail.com</a>.</p>
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='section-main'>
            <h2>Check Us Out On Facebook</h2>
            <p>
                Check out our official Facebook Page 
                <a className='section-main-social' href="https://www.facebook.com/profile.php?id=61563239022521">
                    <img className="footer-logo" src="./images/FBLogo.png" alt="" width={100} height={100}/>
                </a>
            </p>
        </div>
    )
}

const Contact = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Section1/>
            <Section2/>
            <Footer/>
        </div>
    )
}

export default Contact;