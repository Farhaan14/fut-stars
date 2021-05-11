import React from 'react';
import {Footballers} from '../../dataset/data'
import './info.css';
import Navbar from '../Navbar';
import firebase from 'firebase';
import Toggle from './Toggle';

  
class Info extends React.Component{

    componentDidMount (){

        window.scrollTo(0,0); 

        var user = firebase.auth().currentUser;

        if (user != null) {
            localStorage.setItem("uid", user.uid);
        }

        var i;

        var stats = document.getElementsByClassName('stats');
        for (i = 0; i < stats.length; i++) {
            var value = parseInt(stats[i].textContent);
            if(value <= 20){
                stats[i].style.background = "#FF8B5A";
            } else if(value <= 40){
                stats[i].style.background = "#FFB234";
            } else if(value <= 60){
                stats[i].style.background = "#FFD834";
            } else if(value <= 80){
                stats[i].style.background = "#ADD633";
            } else {
                stats[i].style.background = "#9FC05A";
            }
            if(value > 8){
                stats[i].style.width = value + "%";
            } else {
                stats[i].style.width = "8%";
            }
        }

        if(Footballers[localStorage.getItem("id")].name.split(" ")[1] == null){
            document.getElementById("name-1").classList.add("name-2");
            document.getElementById("name-1").classList.add("small");
        }

        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var al=0;
        var start=4.72;
        var cw=context.canvas.width/2;
        var ch=context.canvas.height/2;
        var diff;
        
        function progressBar(){
        diff=(al/100)*Math.PI*2;
        context.clearRect(0,0,400,200);
        context.beginPath();
        context.arc(cw,ch,50,0,2*Math.PI,false);
        context.fillStyle='black';
        context.fill();
        context.strokeStyle='black';
        context.stroke();
        context.fillStyle='white';
        context.strokeStyle='#ff0043';
        context.textAlign='center';
        context.lineWidth=10;
        context.font = '15pt Verdana';
        context.beginPath();
        context.arc(cw,ch,50,start,diff+start,false);
        context.stroke();
        context.fillText(al+" ",cw+2,ch+6);
        if(al>=Footballers[localStorage.getItem("id")].overall){
        clearTimeout(bar);
        }
        
        al++;
        }
        
        var bar=setInterval(progressBar,50);

        var stars;
        var skills_stars = parseInt(Footballers[localStorage.getItem("id")].skills);
        var foot_stars = parseInt(Footballers[localStorage.getItem("id")].weakfoot);

        for(i=1; i<= skills_stars; i++){
            stars = document.getElementById("skills-" + i)
            stars.style.color = "#ff0043";
        } 

        for(i=1; i<= foot_stars; i++){
            stars = document.getElementById("foot-" + i)
            stars.style.color = "#ff0043";
        } 
        
      }
 
    render(){
    return(
        <>
        <Navbar />
        <div className="info-page">
            
            <div className="main-info">
            <Toggle isChecked />
            <div className="heading">
            <div className="column-cont column-cont-2">
                <h3 className="name name-1" id="name-1">{Footballers[localStorage.getItem("id")].name.split(" ")[0]}</h3>
                <div className="name-2-cont">
                <h3 className="name name-2 small">{Footballers[localStorage.getItem("id")].name.split(" ")[1]} {Footballers[localStorage.getItem("id")].name.split(" ")[2]}</h3>
                </div>
            </div>
            <div className="column-cont column-cont-1">
                <div className="subgrid subgrid-1">
                <img className="image player" src={Footballers[localStorage.getItem("id")].Image} alt=""></img>
                </div>
      
                <div className="subgrid subgrid-2">
                {/* <div className="flag-width"> */}
                <img className="image flag country" src={Footballers[localStorage.getItem("id")].Country_Flag} alt=""></img>
                {/* </div> */}
                {/* <div className="flag-width"> */}
                <img className="image flag club" src={Footballers[localStorage.getItem("id")].Club_Flag} alt=""></img>
                {/* </div> */}
                </div>
            </div>
            
            <div className="column-cont column-cont-3">
                <h4 className="name details">
                    Age: {Footballers[localStorage.getItem("id")].age} <span className="seperator">|</span> Height: {Footballers[localStorage.getItem("id")].height} <span className="seperator">|</span> Weight: {Footballers[localStorage.getItem("id")].weight}
                </h4>

                <h4 className="name details league">
                    {Footballers[localStorage.getItem("id")].league} <span className="seperator">|</span> {Footballers[localStorage.getItem("id")].team}
                </h4>

                <h4 className="name details playstyle">
                    {Footballers[localStorage.getItem("id")].position} <span className="seperator">|</span> {Footballers[localStorage.getItem("id")].footed}
                </h4>
            </div>
            </div>
        <br></br>

        <div className="player_card">
            <div className="row">
                <div className="column">
                    <div className="card">
                        <canvas id="myCanvas" className="overall"></canvas>
                        <h4 className="attr overall-title">Overall</h4>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <span className="fa fa-star checked" id="skills-1"></span>
                        <span className="fa fa-star checked" id="skills-2"></span>
                        <span className="fa fa-star checked" id="skills-3"></span>
                        <span className="fa fa-star checked" id="skills-4"></span>
                        <span className="fa fa-star checked" id="skills-5"></span>
                        <h4 className="attr star-title">Skills</h4>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <span className="fa fa-star checked" id="foot-1"></span>
                        <span className="fa fa-star checked" id="foot-2"></span>
                        <span className="fa fa-star checked" id="foot-3"></span>
                        <span className="fa fa-star checked" id="foot-4"></span>
                        <span className="fa fa-star checked" id="foot-5"></span>
                        <h4 className="attr star-title">Weak Foot</h4>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h4 className="workrate">{Footballers[localStorage.getItem("id")].workrate}</h4>
                        <h4 className="attr star-title">Work Rate</h4>
                    </div>
                </div>
            </div>
        </div>
        <br></br>

        <div className="row-stats">
            <div className="column-stats">
                <div className="stats-card">
                    <div className="stat_name">PACE</div>
                    <br></br>
                    <div className="ind_stat_container">Acceleration</div>
                    <div className="accl stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].acceleration}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Sprint Speed</div>
                    <div className="sprint stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].sprint_speed}</span></div>
                    <br />
                </div>
            </div>

            <div className="column-stats">
                <div className="stats-card">
                    <div className="stat_name">SHOTS</div>
                    <br></br>
                    <div className="ind_stat_container">Positioning</div>
                    <div className="post stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].positioning}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Finishing</div>
                    <div className="fini stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].finishing}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Shot Power</div>
                    <div className="shot stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].shot_power}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Long Shots</div>
                    <div className="long stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].long_shots}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Volleys</div>
                    <div className="voll stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].volleys}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Penalties</div>
                    <div className="pen stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].penalties}</span></div>
                    <br />
                </div>
            </div>
            
            <div className="column-stats">
                <div className="stats-card">
                    <div className="stat_name">PASSING</div>
                    <br></br>
                    <div className="ind_stat_container">Vision</div>
                    <div className="vis stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].vision}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Crossing</div>
                    <div className="cr stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].crossing}</span></div>
                    <br></br>
                    <div className="ind_stat_container">FK. Acc.</div>
                    <div className="fk stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].freekick}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Short Pass</div>
                    <div className="shrt stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].short_pass}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Long Pass</div>
                    <div className="lngpas stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].long_pass}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Curve</div>
                    <div className="cur stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].curve}</span></div>
                    <br />
                </div>
            </div>

            <div className="column-stats">
                <div className="stats-card">
                    <div className="stat_name">DRIBBLES</div>
                    <br></br>
                    <div className="ind_stat_container">Agility</div>
                    <div className="agi stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].agility}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Balance</div>
                    <div className="bal stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].balance}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Reactions</div>
                    <div className="rea stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].reactions}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Ball Control</div>
                    <div className="ctrl stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].ball_control}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Dribbling</div>
                    <div className="drb stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].dribbling}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Composure</div>
                    <div className="comp stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].composure}</span></div>
                    <br />
                </div>
            </div>

            <div className="column-stats">
                <div className="stats-card">
                    <div className="stat_name">DEFENDING</div>
                    <br></br>
                    <div className="ind_stat_container">Interceptions</div>
                    <div className="int stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].interceptions}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Heading</div>
                    <div className="head stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].heading}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Awarness</div>
                    <div className="def stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].awareness}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Stand Tackle</div>
                    <div className="std stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].stand_tackle}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Slide Tackle</div>
                    <div className="sld stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].slide_tackle}</span></div>
                    <br />
                </div>
            </div>

            <div className="column-stats">
                <div className="stats-card">
                    <div className="stat_name">PHYSICAL</div>
                    <br></br>
                    <div className="ind_stat_container">Jumping</div>
                    <div className="jump stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].jumping}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Stamina</div>
                    <div className="stam stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].stamina}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Strength</div>
                    <div className="strg stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].strength}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Aggresion</div>
                    <div className="agg stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].aggression}</span></div>
                    <br />
                </div>
            </div>

            <div className="column-stats">
                <div className="stats-card">
                    <div className="stat_name">GOALKEEPER</div>
                    <br></br>
                    <div className="ind_stat_container">Diving</div>
                    <div className="divi stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].diving}</span></div> 
                    <br></br>
                    <div className="ind_stat_container">Handling</div>
                    <div className="handl stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].handling}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Kicking</div>
                    <div className="kick stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].kicking}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Reflexes</div>
                    <div className="refl stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].reflexes}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Speed</div>
                    <div className="spd stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].spd}</span></div>
                    <br></br>
                    <div className="ind_stat_container">Positioning</div>
                    <div className="pos stats"><span className="stat-content">{Footballers[localStorage.getItem("id")].pos}</span></div>
                    <br />
                </div>
            </div>
        </div>

        </div>
        </div>

        </>
    )
}
}
export default Info;