import React from 'react';
import {Footballers} from '../../dataset/data'
import {Link} from 'react-router-dom';
import './mid.scss'
import './newcard.scss'
import Navbar from '../Navbar';

const handleClick = (e) => {
    localStorage.setItem('id', e.currentTarget.id);
  }


export default class GoalKeeper extends React.Component{

    render(){
        

    return(
		<>
		<Navbar />

        <div className="page">
        
            <h4 className="page-heading">GoalKeeper</h4>

            <div className="player-container goalkeeper">
                {Footballers.map((data) => {
                return (
					<div key={data.id} className="main-player-cont">
                            {
                                (
                                    data.position === "GK"
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
															<div className="player-feature-value">{data.diving}</div>
															<div className="player-feature-title">DIV</div>
														</span><span>
															<div className="player-feature-value">{data.handling}</div>
															<div className="player-feature-title">HAN</div>
														</span><span>
															<div className="player-feature-value">{data.kicking}</div>
															<div className="player-feature-title">KIC</div>
														</span></div>
													<div style={{'paddingRight':'0','paddingLeft':'10'}} className="player-features-col"><span>
															<div className="player-feature-value">{data.reflexes}</div>
															<div className="player-feature-title">REF</div>
														</span><span>
															<div className="player-feature-value">{data.spd}</div>
															<div className="player-feature-title">SPD</div>
														</span><span>
															<div className="player-feature-value">{data.pos}</div>
															<div className="player-feature-title">POS</div>
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
    