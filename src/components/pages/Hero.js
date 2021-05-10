import React from 'react';
import Navbar from '../Navbar';

const Hero = ({handleLogOut}) => {
return (
    <>
    <Navbar />
    <section className="hero">
        <nav>
            <h2>Logout</h2>
            <button onClick={handleLogOut}>LogOut</button>
        </nav>
    </section>
    </>
)
}

export default Hero;