
const Footer = () => {
    return (
        <>
        <div className="text-center   border-b-2 pt-24 pb-10 ">
            <h1 className="text-4xl font-bold mb-4">Gadget Heaven</h1>
            <p>Leading the way in cutting-edge technology</p>
        </div>
            <footer className="flex justify-evenly p-10 ">
                <nav className="flex flex-col">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </>
    );
};

export default Footer;