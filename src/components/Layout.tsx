import React from 'react';
import Navbar from './Navbar.js';
import MiniNav from './MiniNav.js';
import Particle from './Particle.js';

const Layout = () => {
    return (
        <>
            <Particle />
            <div className="m-8">
                <Navbar />
                <MiniNav />
            </div>
        </>
    );
};

export default Layout;