import React from 'react';
import {Footballers} from '../../dataset/data';
import './compare.css';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const displayChart = () =>{
    var x = document.getElementById("chart-select").value;
    var canvas = document.createElement('canvas');
    canvas.id = x;
    document.getElementById('chart-container').appendChild(canvas)
}

class CompareInfo extends React.Component{
    componentDidMount(){

        

        //SHOTS
        var ctx = document.getElementById('shots');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: [
                    'Positioning',
                    'Finishing',
                    'Shot Power',
                    'Long Shots',
                    'Volleys',
                    'Penalties'
                ],
                datasets: [{
                    label: Footballers[localStorage.getItem("id1")].name,
                    data: [
                        Footballers[localStorage.getItem("id1")].positioning,
                        Footballers[localStorage.getItem("id1")].finishing,
                        Footballers[localStorage.getItem("id1")].shot_power,
                        Footballers[localStorage.getItem("id1")].long_shots,
                        Footballers[localStorage.getItem("id1")].volleys,
                        Footballers[localStorage.getItem("id1")].penalties
                    ],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                }, {
                    label: Footballers[localStorage.getItem("id2")].name,
                    data: [
                        Footballers[localStorage.getItem("id2")].positioning,
                        Footballers[localStorage.getItem("id2")].finishing,
                        Footballers[localStorage.getItem("id2")].shot_power,
                        Footballers[localStorage.getItem("id2")].long_shots,
                        Footballers[localStorage.getItem("id2")].volleys,
                        Footballers[localStorage.getItem("id2")].penalties
                    ],
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
                plugins: {
                    title: {
                        display: true,
                        text: 'Shots'
                    }
                }
            }
        });
    }
    
    render(){
    return(
        <>
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
                    <select id="chart-select" onChange={displayChart()}>
                        <option value="pace">Pace</option>
                        <option value="shots">Shots</option>
                    </select>
                    <div className="chart-cont" id="chart-container">
                    </div>
                </div>
            </div>
        </>
    )
    }
}

export default CompareInfo;