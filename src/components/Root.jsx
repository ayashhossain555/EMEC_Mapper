import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Contact from './Contact';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Root;