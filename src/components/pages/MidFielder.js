import React from 'react';
import {Footballers} from '../../dataset/data'
import {Link} from 'react-router-dom';
import './mid.scss'
import './newcard.scss'
import Navbar from '../Navbar';

const handleClick = (e) => {
    localStorage.setItem('id', e.currentTarget.id);
  }


export default class MidFielder extends React.Component{

    render(){
        

    return(
        <>
        <Navbar />

        <div className="page">
        
            <h4 className="page-heading">MidFielder</h4>

            <div className="player-container midfielder">
                {Footballers.map((data) => {
                return (
                    <div key={data.id} className="main-player-cont">
                            {
                                (
                                    data.position === "LAM" || 
                                    data.position === "CAM" || 
                                    data.position === "RAM" || 
                                    data.position === "LM" ||
                                    data.position === "LCM" || 
                                    data.position === "CM" || 
                                    data.position === "RCM" || 
                                    data.position === "RM"  
                                ) && 
                                
								<div className="cont" > 
                                
								<Link to='/Info' key={data.id}>
								<div className="wrapper" key={data.id} id={data.id} onClick={handleClick}>
									
									<div className="fut-player-card">
										
										<div className="player-card-top">
											<div className="player-master-info">
												<div className="player-rating"><span>{data.overall}</span></div>
												<div className="player-position"><span>{data.position}</span></div>
												<div className="player-nation"><img src={data.Country_Flag} alt="" draggable="false" /></div>
												<div className="player-club"><img src={data.Club_Flag} alt="" draggable="false" /></div>
											</div>
											<div className="player-picture"><img src={data.Image} draggable="false" alt=""/>
												
											</div>
										</div>
										<div className="player-card-bottom">
											<div className="player-info">
                                           
												<div className="player-name"><span>{data.name}</span></div>
												
                                                <div className="player-features">
                                                    <div style={{'paddingLeft':'20'}} className="player-features-col"><span>
                                                            <div className="player-feature-value">{data.pace}</div>
                                                            <div className="player-feature-title">PAC</div>
                                                        </span><span>
                                                            <div className="player-feature-value">{data.shooting}</div>
                                                            <div className="player-feature-title">SHO</div>
                                                        </span><span>
                                                            <div className="player-feature-value">{data.passing}</div>
                                                            <div className="player-feature-title">PAS</div>
                                                        </span></div>
                                                    <div style={{'paddingRight':'0','paddingLeft':'10'}} className="player-features-col"><span>
                                                            <div className="player-feature-value">{data.dribbling}</div>
                                                            <div className="player-feature-title">DRI</div>
                                                        </span><span>
                                                            <div className="player-feature-value">{data.defense}</div>
                                                            <div className="player-feature-title">DEF</div>
                                                        </span><span>
                                                            <div className="player-feature-value">{data.physical}</div>
                                                            <div className="player-feature-title">PHY</div>
                                                        </span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								</Link>
								</div>
    
                            }
                        </div>
                );
                })}
            </div>
        </div>
        
         </>   
    )
            }
}
    