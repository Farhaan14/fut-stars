import React from 'react';
import {Link} from 'react-router-dom';
import './player.css'
import Navbar from '../Navbar';

export default function Players(){
    return(
        <>
            <Navbar />
            <h4 className="page-heading players">Players</h4>
            <ul className="player-types">
            <Link to='/Forward' className='player-links'>
                <li className='nav-item player-category'>
                    
                        Forward
                    
                </li>
                </Link>
                <Link to='/MidFielder' className='player-links'>
                <li className='nav-item player-category'>
                    
                        MidFielder
                    
                </li>
                </Link>
                <Link to='/Defender' className='player-links'>
                <li className='nav-item player-category'>
                    
                        Defender
                    
                </li>
                </Link>
                <Link to='/GoalKeeper' className='player-links'>
                <li className='nav-item player-category'>
                        
                        GoalKeeper
                    
                </li>   
                </Link>    
            </ul>
        </>
    )
}