import Hero from '../components/Hero';
import Header from '../components/Header'
import Footer from '../components/Footer'

const OurProcess = () => {
    return (
        <div className="section-main">
            <h2>Our Process</h2>
            <p>At milford sharpening and restoration we use a meticulous process to restore and maintain 
                the integrity of your knives and blades.
            </p>
            <p>
            Beginning with the sanding. We use a fine grit 
            sanding belt to reshape and refine the angle of the blade, ensuring the bevel of both sides meet the standard for sharpness.
                
            </p> 
            <p>
                Once the angle is in between 15 to 20 degrees. Once this is done we move to a fine grit sharpening stone to polish the newly restored edge. After this we strop the blade until the blade is smooth enough to shave hair with.
            </p>
            <p>
                With your knives in our care you are assured a razors edge with every blade you bring us.
            </p>
        </div>
    )
}

const OurDeal = () => {
    return (
        <div className='section-main'>
            <h2>For Repeat Customers</h2>
            <p>Milford Sharpening and Restoration values our customers and our wish is to make sure they know that value. For this reason we decrease the prices of our sharpening services for repeat customers.
                After the third visit we decrease the prices of our service by 25 cents an inch. This makes sure that customers that are loyal to us know how much we appreciate their business.
            </p>
        </div>
    )
}


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
            <OurDeal/>
            <OurProcess/>
            <Footer/>
        </div>
    )
}

export default Services;