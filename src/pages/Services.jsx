import Hero from '../components/Hero';
import Header from '../components/Header'
import Footer from '../components/Footer'


const ServicesSection = () => {
    return (
        <div className='section-main'>
            <title>Professional Knife Sharpening and Restoration Services</title>
            <h1>Services Include</h1>
            <ul>
                <li>
                    <h2>Sharpening</h2>
                    <p>$1.50 per inch</p>
                    <p>Ensure your knives are razor-sharp with our professional sharpening service.</p>
                </li>
                <li>
                    <h2>Serrated Sharpening</h2>
                    <p>$2.50 per inch</p>
                    <p>Specialized sharpening for serrated edges to keep them effective and sharp.</p>
                </li>
                <li>
                    <h2>Rust Removal</h2>
                    <p>Varies on degree of rust</p>
                    <p>Remove rust and restore the finish of your blades to make them look like new.</p>
                </li>
                <li>
                    <h2>Tip And Edge Restoration</h2>
                    <p>Varies on amount of grinding necessary</p>
                    <p>Repair damaged tips and edges to restore the functionality of your knives.</p>
                </li>
                <li>
                    <h2>Blade Straightening</h2>
                    <p>Varies on degree of the bend</p>
                    <p>Straighten bent blades to restore their original shape and performance.</p>
                </li>
                <li>
                    <h2>Handle Replacement and Mending</h2>
                    <p>Varies on resource cost of restoration</p>
                    <p>Replace or mend knife handles to ensure a comfortable and secure grip.</p>
                </li>
            </ul>
        </div>
    )
}

const Services = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <ServicesSection/>
            <Footer/>
        </div>
    )
}

export default Services;