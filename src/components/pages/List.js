import React from 'react';
import Navbar from '../Navbar';
import './recommendation.css';

import {Footballers} from '../../dataset/data';
import { Link } from 'react-router-dom';

const handleClick = (e) => {
    localStorage.setItem('id',  e.currentTarget.id);
  }

const getSimilarity = (id1, id2) => {
    var similarity = require( 'compute-cosine-similarity' );
        var x = [
                    Footballers[id1].overall,
                    Footballers[id1].skills,
                    Footballers[id1].age,
                    Footballers[id1].acceleration,
                    Footballers[id1].sprint_speed,
                    Footballers[id1].positioning,
                    Footballers[id1].finishing,
                    Footballers[id1].shot_power,
                    Footballers[id1].long_shots,
                    Footballers[id1].volleys,
                    Footballers[id1].penalties,
                    Footballers[id1].vision,
                    Footballers[id1].crossing,
                    Footballers[id1].freekick,
                    Footballers[id1].short_pass,
                    Footballers[id1].long_pass,
                    Footballers[id1].curve,
                    Footballers[id1].agility,
                    Footballers[id1].balance,
                    Footballers[id1].reactions,
                    Footballers[id1].ball_control,
                    Footballers[id1].dribbling,
                    Footballers[id1].composure,
                    Footballers[id1].interceptions,
                    Footballers[id1].heading,
                    Footballers[id1].awareness,
                    Footballers[id1].stand_tackle,
                    Footballers[id1].slide_tackle,
                    Footballers[id1].jumping,
                    Footballers[id1].stamina,
                    Footballers[id1].strength,
                    Footballers[id1].aggression,
                    Footballers[id1].diving,
                    Footballers[id1].handling,
                    Footballers[id1].kicking,
                    Footballers[id1].reflexes,
                    Footballers[id1].spd,
                    Footballers[id1].pos
                ],
            y = [
                    Footballers[id2].overall,
                    Footballers[id2].skills,
                    Footballers[id2].age,
                    Footballers[id2].acceleration,
                    Footballers[id2].sprint_speed,
                    Footballers[id2].positioning,
                    Footballers[id2].finishing,
                    Footballers[id2].shot_power,
                    Footballers[id2].long_shots,
                    Footballers[id2].volleys,
                    Footballers[id2].penalties,
                    Footballers[id2].vision,
                    Footballers[id2].crossing,
                    Footballers[id2].freekick,
                    Footballers[id2].short_pass,
                    Footballers[id2].long_pass,
                    Footballers[id2].curve,
                    Footballers[id2].agility,
                    Footballers[id2].balance,
                    Footballers[id2].reactions,
                    Footballers[id2].ball_control,
                    Footballers[id2].dribbling,
                    Footballers[id2].composure,
                    Footballers[id2].interceptions,
                    Footballers[id2].heading,
                    Footballers[id2].awareness,
                    Footballers[id2].stand_tackle,
                    Footballers[id2].slide_tackle,
                    Footballers[id2].jumping,
                    Footballers[id2].stamina,
                    Footballers[id2].strength,
                    Footballers[id2].aggression,
                    Footballers[id2].diving,
                    Footballers[id2].handling,
                    Footballers[id2].kicking,
                    Footballers[id2].reflexes,
                    Footballers[id2].spd,
                    Footballers[id2].pos
                ]

 
        var s = similarity( x, y );
        return s
} 

const similarPlayers = () => {
        var id = parseInt(localStorage.getItem('idr'));

        var similarityScores = {};

        for(var i=0; i<Footballers.length; i++){
            if(i !== id){
                similarityScores[i] = getSimilarity(id, i);
            } else {
                similarityScores[i] = -1;
            }
        }
        
        var sortable = [];
        for (var j in similarityScores) {
            sortable.push([j, similarityScores[j]]);
        }

        sortable.sort(function(a, b) {
            return a[1] - b[1];
        }).reverse();

        var best = sortable.slice(0, 10);
        for(var k=0; k<10; k++)
            console.log(best[k][0])

        console.log(best)
        return best;
        
}

class List extends React.Component{

    componentDidMount(){

        window.scrollTo(0,0);
        var best = similarPlayers();

        var div = document.getElementById('r-list');
        for(var i=0; i<10; i++){

            var newDiv = document.createElement('div');
            newDiv.className = "wishlist-item";
            newDiv.key = i;

            var a = document.createElement('a');
            a.href = "/Info";

            var item_1 = document.createElement('div');
            item_1.className = "item-1";

            var name_1 = document.createElement('div');
            name_1.className = "name name-1 comp-1-1";
            
            var name_2 = document.createElement('div');
            name_2.className = "name-2-cont";

            var name_3 = document.createElement('div');
            name_3.className = "name name-2 comp-1-2 small";

            var item_2 = document.createElement('div');
            item_2.className = "item-5";

            var image = document.createElement('img');
            image.className = "image player";
            
            var id = best[i][0];
            var first = Footballers[id].name.split(" ")[0];
            var second = Footballers[id].name.split(" ")[1];
            var third = Footballers[id].name.split(" ")[2];
            var img = Footballers[id].Image;

            image.src = img;

            if(third === undefined) {
                if(second === undefined) {
                    name_3.innerHTML = first;
                } else {
                    name_1.innerHTML = first;
                    name_3.innerHTML = second;
                }
                
            } else {
                name_1.innerHTML = first;
                name_3.innerHTML = second + third;
            }

            name_2.appendChild(name_3);

            item_1.appendChild(name_1);
            item_1.appendChild(name_2);
            item_2.appendChild(image);

            newDiv.appendChild(item_1);
            newDiv.appendChild(item_2);

            a.id = id;
            newDiv.id = id;
            newDiv.onclick = handleClick;
            // a.onclick = handleClick;

            a.appendChild(newDiv);
            div.appendChild(a);
            
        }
    }

    render(){

        
        
        return(
            <>
                <Navbar />
                <h4 className="similar-heading">Similar Players to {Footballers[localStorage.getItem('idr')].name}</h4>
                <div id="r-list" className="r-list"></div>
            </>
        )
        
    }
}

export default List;