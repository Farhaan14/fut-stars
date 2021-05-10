import React from 'react';
import {Link} from 'react-router-dom';

const Hero = ({handleLogOut}) => {
return (
    <section className="hero">
        <nav>
            <h2>Welcome</h2>
            <Link to='/' onClick={handleLogOut}>
                <button>LogOut</button>
            </Link>
            
        </nav>
    </section>
)
}

export default Hero;