import React from 'react';
import {Footballers} from '../../dataset/data'
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import './compare.css';

const handleClick1 = (e) => {
    localStorage.setItem('id1', e.target.id);
    
    var all = document.getElementsByClassName('player-1');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor = '#222';
        all[i].onmouseover = function() {
            this.style.backgroundColor = "#FF0043";
        }
        all[i].onmouseout = function() {
            this.style.backgroundColor = "#222";
            all[e.target.id].style.backgroundColor = "#FF0043";
        }
        
    }

    
  }

const handleClick2 = (e) => {
    localStorage.setItem('id2', e.target.id);
    
    var all = document.getElementsByClassName('player-2');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor = '#222';
        all[i].onmouseover = function() {
            this.style.backgroundColor = "#FF0043";
        }
        all[i].onmouseout = function() {
            this.style.backgroundColor = "#222";
            all[e.target.id].style.backgroundColor = "#FF0043";
        }
        
    }
  }

class Comparision extends React.Component{

    componentDidMount(){
        localStorage.setItem('id1', 0);
        localStorage.setItem('id2', 0);
    }
    
    render(){
        return (
        <>
            <Navbar />
            <div className="player-container-compare">
                {    
                Footballers.map((data) => {
                    
                    return(
                    <>
                        <div key={data.id}>
                            {
                                <div className="player-button">
                                    <button key={data.id} id={data.id} onClick={handleClick1} className="player-1">{data.name}</button>
                                    <button key={data.id} id={data.id} onClick={handleClick2} className="player-2">{data.name}</button> 
                                 </div>
                            }
                        </div>
                         
                    </>
                );
                })}
            </div>
            <Link to='/CompareInfo'>
                <button className="submit-comparision">Submit</button>
            </Link>  
        </>
        )
    }
}

export default Comparision;