const Header = () => {
    return (
        <div className="header">
            <title>Knife Sharpening Service for Milford and Loveland, OH - Knife Sharpening | Sharpening Service | Blade Maintenance</title>
            <img src="./images/logo.jpg" alt="msr logo" width={50} height={50}></img>
            <nav>
                <a href="/">Home</a>
                <a href="services">Services</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
            </nav>
        </div>
    );
}

export default Header;