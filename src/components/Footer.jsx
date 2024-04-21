import React from 'react';
import logo from '../../public/logo.png';
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content rounded-xl mt-24">
                <aside>
                    <img src={logo} alt="" className='w-48' />
                    <p>EMEC Ltd.<br/>Providing reliable service since 2018</p>
                </aside> 
                <nav>
                    <h6 className="footer-title">Services</h6> 
                    <a className="link link-hover">GIS</a>
                    <a className="link link-hover">Water Resource Management</a>
                    <a className="link link-hover">Disaster Management</a>
                    <a className="link link-hover">GEO Spatial Service</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Message</a>
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