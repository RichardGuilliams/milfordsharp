const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li>
                    <p>Phone:</p>
                    <a href="tel:+19703076557">(970)307-6557</a>
                </li>
                <li>
                    <p>Email:</p>
                    <a href="mailto:milfordsharp.com">milfordsharp@gmail.com</a>
                </li>
                <li>
                    <p>Address:</p>
                    <a href="https://www.google.com/maps/place/628+Ibold+Rd,+Loveland,+OH+45140/@39.2186297,-84.2774944,17z/data=!3m1!4b1!4m6!3m5!1s0x8840557ed182daab:0x4cabc349760ec70f!8m2!3d39.2186256!4d-84.2749195!16s%2Fg%2F11c11w4x2p?entry=ttu">628 Ibold Rd, Loveland, OH</a>
                </li>
            </ul>
            <div>
                <ul className="footer-social">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=61563239022521">
                            <img className="footer-logo" src="./images/FBLogo.png" alt="" width={100} height={100}/>
                        </a>
                    </li>
                </ul>
                <p className="footer-copyright">&copy; {new Date().getFullYear()} Milford Sharpening and Restortion</p>
            </div>
        </div>
    )
}

export default Footer;