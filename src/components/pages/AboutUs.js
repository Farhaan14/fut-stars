import React from 'react';
import Navbar from '../Navbar';
import './aboutus.css';

export default function AboutUs(){
    return(
        <>
            <Navbar />
            <h4 className="page-heading aboutus-title">About Us</h4>
            <div className="relative">
            <div className="about-cont">
                <p className="about-content">
                    Enim aute ipsum quis nulla cupidatat labore voluptate commodo. Ea adipisicing cillum qui nisi excepteur pariatur deserunt. Ipsum quis veniam laborum occaecat dolor non. Ea laborum aute ipsum mollit magna commodo minim est in eu irure esse aliquip.
                </p>
                <div className="github-cont">
                    <a href="https://github.com/Fut-Stars/fut-stars" className="github-link">Fut Stars</a><br />
                    <a href="https://github.com/Dimish18" className="github-link">https://github.com/Dimish18</a><br />
                    <a href="https://github.com/Farhaan14" className="github-link">https://github.com/Farhaan14</a><br />
                    <a href="https://github.com/VTPrince" className="github-link">https://github.com/VTPrince</a><br />
                </div>
            </div>
            </div>
        </> 
    )
}