import React from 'react';
import Navbar from '../Navbar';
import './aboutus.css';

export default function AboutUs(){
    return(
        <>
            <Navbar />
            <h4 className="page-heading aboutus-title">About Us</h4>

            <div className="about-cont">
                <p className="about-content">
                Fut Stars provides the teams with an opportunity to infuse their squad with new talent. The players which would be drafted by their teams would provide an instant boost to them; while others might not. But the chance that drafted players will lead their new clubs to glory makes teams compete over talent.
                </p>
                <div className="github-cont">
                    <a href="https://github.com/Fut-Stars/fut-stars" className="github-link">Fut Stars</a><br />
                    <a href="https://github.com/Dimish18" className="github-link">https://github.com/Dimish18</a><br />
                    <a href="https://github.com/Farhaan14" className="github-link">https://github.com/Farhaan14</a><br />
                    <a href="https://github.com/VTPrince" className="github-link">https://github.com/VTPrince</a><br />
                </div>
            </div>

        </> 
    )
}