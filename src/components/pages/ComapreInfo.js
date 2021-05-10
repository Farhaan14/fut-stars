import React from 'react';
import {Footballers} from '../../dataset/data';
import './compare.css';
import Navbar from '../Navbar';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


class CompareInfo extends React.Component{

    componentDidUpdate(){

        var type_chart = 'radar';
        var labels;
        var data1;
        var data2;
        var caption;
    
        if(localStorage.getItem('selected-chart') === 'shots'){
            labels = [
                'Positioning',
                'Finishing',
                'Shot Power',
                'Long Shots',
                'Volleys',
                'Penalties'
            ];

            data1 = [
                Footballers[localStorage.getItem("id1")].positioning,
                Footballers[localStorage.getItem("id1")].finishing,
                Footballers[localStorage.getItem("id1")].shot_power,
                Footballers[localStorage.getItem("id1")].long_shots,
                Footballers[localStorage.getItem("id1")].volleys,
                Footballers[localStorage.getItem("id1")].penalties
            ];

            data2 = [
                Footballers[localStorage.getItem("id2")].positioning,
                Footballers[localStorage.getItem("id2")].finishing,
                Footballers[localStorage.getItem("id2")].shot_power,
                Footballers[localStorage.getItem("id2")].long_shots,
                Footballers[localStorage.getItem("id2")].volleys,
                Footballers[localStorage.getItem("id2")].penalties
            ];

            caption = 'Shots';
        }

        else if(localStorage.getItem('selected-chart') === 'passing'){
            labels = [
                'Vision',
                'Crossing',
                'Free Kick',
                'Short Pass',
                'Long Pass',
                'Curve'
            ];

            data1 = [
                Footballers[localStorage.getItem("id1")].vision,
                Footballers[localStorage.getItem("id1")].crossing,
                Footballers[localStorage.getItem("id1")].freekick,
                Footballers[localStorage.getItem("id1")].short_pass,
                Footballers[localStorage.getItem("id1")].long_pass,
                Footballers[localStorage.getItem("id1")].curve
            ];

            data2 = [
                Footballers[localStorage.getItem("id2")].vision,
                Footballers[localStorage.getItem("id2")].crossing,
                Footballers[localStorage.getItem("id2")].freekick,
                Footballers[localStorage.getItem("id2")].short_pass,
                Footballers[localStorage.getItem("id2")].long_pass,
                Footballers[localStorage.getItem("id2")].curve
            ];

            caption = 'Passing';
        }

        else if(localStorage.getItem('selected-chart') === 'dribbles'){
            labels = [
                'Agility',
                'Balance',
                'Reactions',
                'Ball Control',
                'Dribbling',
                'Composure'
            ];

            data1 = [
                Footballers[localStorage.getItem("id1")].agility,
                Footballers[localStorage.getItem("id1")].balance,
                Footballers[localStorage.getItem("id1")].reactions,
                Footballers[localStorage.getItem("id1")].ball_control,
                Footballers[localStorage.getItem("id1")].dribbling,
                Footballers[localStorage.getItem("id1")].composure
            ];

            data2 = [
                Footballers[localStorage.getItem("id2")].agility,
                Footballers[localStorage.getItem("id2")].balance,
                Footballers[localStorage.getItem("id2")].reactions,
                Footballers[localStorage.getItem("id2")].ball_control,
                Footballers[localStorage.getItem("id2")].dribbling,
                Footballers[localStorage.getItem("id2")].composure
            ];

            caption = 'Dribbles';
        }

        else if(localStorage.getItem('selected-chart') === 'defending'){
            labels = [
                'Interceptions',
                'Heading',
                'Awarness',
                'Stand Tackle',
                'Slide Tackle'
            ];

            data1 = [
                Footballers[localStorage.getItem("id1")].interceptions,
                Footballers[localStorage.getItem("id1")].heading,
                Footballers[localStorage.getItem("id1")].awareness,
                Footballers[localStorage.getItem("id1")].stand_tackle,
                Footballers[localStorage.getItem("id1")].slide_tackle
            ];

            data2 = [
                Footballers[localStorage.getItem("id2")].interceptions,
                Footballers[localStorage.getItem("id2")].heading,
                Footballers[localStorage.getItem("id2")].awareness,
                Footballers[localStorage.getItem("id2")].stand_tackle,
                Footballers[localStorage.getItem("id2")].slide_tackle
            ];

            caption = 'Defending';
        }

        else if(localStorage.getItem('selected-chart') === 'physical'){
            labels = [
                'Jumping',
                'Stamina',
                'Strength',
                'Aggresion'
            ];

            data1 = [
                Footballers[localStorage.getItem("id1")].jumping,
                Footballers[localStorage.getItem("id1")].stamina,
                Footballers[localStorage.getItem("id1")].strength,
                Footballers[localStorage.getItem("id1")].aggression
            ];

            data2 = [
                Footballers[localStorage.getItem("id2")].jumping,
                Footballers[localStorage.getItem("id2")].stamina,
                Footballers[localStorage.getItem("id2")].strength,
                Footballers[localStorage.getItem("id2")].aggression
            ];

            caption = 'Physical';
        }

        else if(localStorage.getItem('selected-chart') === 'goalkeeper'){
            labels = [
                'Diving',
                'Handling',
                'Kicking',
                'Reflexes',
                'Speed',
                'Positioning'
            ];

            data1 = [
                Footballers[localStorage.getItem("id1")].diving,
                Footballers[localStorage.getItem("id1")].handling,
                Footballers[localStorage.getItem("id1")].kicking,
                Footballers[localStorage.getItem("id1")].reflexes,
                Footballers[localStorage.getItem("id1")].spd,
                Footballers[localStorage.getItem("id1")].pos
            ];

            data2 = [
                Footballers[localStorage.getItem("id2")].diving,
                Footballers[localStorage.getItem("id2")].handling,
                Footballers[localStorage.getItem("id2")].kicking,
                Footballers[localStorage.getItem("id2")].reflexes,
                Footballers[localStorage.getItem("id2")].spd,
                Footballers[localStorage.getItem("id2")].pos
            ];

            caption = 'GK';
        }

        else{
            type_chart = 'bar';

            labels = [
                'Acceleration',
                'Sprint Speed'
            ];
        
            data1 = [
                Footballers[localStorage.getItem("id1")].acceleration,
                Footballers[localStorage.getItem("id1")].sprint_speed
            ];
        
            data2 = [
                Footballers[localStorage.getItem("id2")].acceleration,
                Footballers[localStorage.getItem("id2")].sprint_speed
            ];
        
            caption = 'Pace';

        }

        Chart.defaults.backgroundColor = '#fff';
        Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.2)';
        Chart.defaults.color = '#fff';
        Chart.defaults.font.size = 12;
        Chart.defaults.backdropColor = 'rgba(0, 0, 0, 0)';
        Chart.defaults.elements.bar.borderWidth = 3;

        //CHART
        var chart = document.getElementById(localStorage.getItem('selected-chart'));
        new Chart(chart, {
            type: type_chart,
            data: {
                labels: labels,
                datasets: [{
                    label: Footballers[localStorage.getItem("id1")].name,
                    data: data1,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                }, {
                    label: Footballers[localStorage.getItem("id2")].name,
                    data: data2,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
            },
            options: {
                scale: {
                    ticks: {
                        maxTicksLimit: 5
                    }
                },
                
                plugins: {
                    title: {
                        display: true,
                        text: caption,
                        color: '#fff',
                        font: {
                            size: 50
                        }
                    },
                    legend: {
                        labels: {
                            color: '#fff',
                            font: {
                                size: 15
                            }
                        }
                    }
                }
            }
        });
    }
    

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        var x = document.getElementById("chart-select").value;
        var canvas = document.createElement('canvas');
        canvas.id = x;
        localStorage.setItem('selected-chart', x);
        var parent = document.getElementById('chart-container');
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        parent.appendChild(canvas);
      }
    
    render(){
    return(
        <>
            <Navbar />
            <div className="players-info">
                <div className="heading-comp">
                    <div className="item-1">
                        <h3 className="name name-1 comp-1-1" id="name-1">{Footballers[localStorage.getItem("id1")].name.split(" ")[0]}</h3>
                        <div className="name-2-cont">
                            <h3 className="name name-2 comp-1-2 small">{Footballers[localStorage.getItem("id1")].name.split(" ")[1]} {Footballers[localStorage.getItem("id1")].name.split(" ")[2]}</h3>
                        </div>
                    </div>
                    <div className="item-2">
                        <h3 className="name name-1 comp-2-1" id="name-1">{Footballers[localStorage.getItem("id2")].name.split(" ")[0]}</h3>
                        <div className="name-2-cont">
                            <h3 className="name name-2 comp-2-2 small">{Footballers[localStorage.getItem("id2")].name.split(" ")[1]} {Footballers[localStorage.getItem("id2")].name.split(" ")[2]}</h3>
                        </div>
                    </div>
                    <div className="item-3">
                        <div className="img-grid-1">
                            <img className="image player" src={Footballers[localStorage.getItem("id1")].Image} alt=""></img>
                        </div>
                        <div className="img-grid-2">
                            <img className="image flag country" src={Footballers[localStorage.getItem("id1")].Country_Flag} alt=""></img>
                            <img className="image flag club" src={Footballers[localStorage.getItem("id1")].Club_Flag} alt=""></img>
                        </div>
                    </div>
                    <div className="item-4">
                        <div className="img-grid-3">
                            <img className="image player" src={Footballers[localStorage.getItem("id2")].Image} alt=""></img>
                        </div>
                        <div className="img-grid-4">
                            <img className="image flag country" src={Footballers[localStorage.getItem("id2")].Country_Flag} alt=""></img>
                            <img className="image flag club" src={Footballers[localStorage.getItem("id2")].Club_Flag} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className="compare-chart">
                    <div className="custom-select">
                        <select id="chart-select" value={this.state.value} onChange={this.handleChange}>
                            <option disabled selected value=""> -- select an option -- </option>
                            <option className="option" value="pace">Pace</option>
                            <option className="option" value="shots">Shots</option>
                            <option className="option" value="passing">Passing</option>
                            <option className="option" value="dribbles">Dribbles</option>
                            <option className="option" value="defending">Defending</option>
                            <option className="option" value="physical">Physical</option>
                            <option className="option" value="goalkeeper">GK</option>
                        </select>
                    </div>
                    <div className="chart-cont" id="chart-container">
                    </div>
                </div>
            </div>
        </>
    )
    }
}

export default CompareInfo;