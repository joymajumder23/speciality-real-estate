import { Link } from "react-router-dom";
import logo from "../../assets/jr.png";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content mt-24">
                <aside>
                    <Link to="/"><p className="text-xl font-bold flex items-center gap-1"><img className="w-6" src={logo} alt="" />JR Developers</p></Link>
                    <p>A trusted real estate company</p>
                    <div>
                <p>Copyrights &#169; 2024 - All Rights Reserved by JR Developers Ltd.</p>
                </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;