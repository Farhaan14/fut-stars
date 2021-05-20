import React from 'react';
import Navbar from '../Navbar';
import './recommendation.css';


import {Footballers} from '../../dataset/data';
import { Link } from 'react-router-dom';

const handleClick = (e) => {
    localStorage.setItem('idr', e.target.id);
    
  }

class Recommendation extends React.Component{

    render(){
               
        return(
            <>
                <Navbar />
                <h4 className="page-heading wishlist-title">Recommendation</h4>
                <div className="player-container-compare recommend-cont">
                {    
                Footballers.map((data) => {
                    
                    return(
                    <>
                        <div key={data.id + "main"}>
                            {
                                <div className="player-button">
                                    <Link to="/List">
                                        <button key={data.id} id={data.id} onClick={handleClick} className="player-1">{data.name}</button>
                                    </Link>
                                 </div>
                            }
                        </div>
                         
                    </>
                );
                })}
            </div>
            </>
        )
    }
}

export default Recommendation;