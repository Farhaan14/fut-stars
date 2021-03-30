import React from 'react';
import {Footballers} from '../../dataset/data'
import {Link} from 'react-router-dom';

const handleClick1 = (e) => {
    localStorage.setItem('id1', e.target.id);
  }

const handleClick2 = (e) => {
    localStorage.setItem('id2', e.target.id);
  }

class Comparision extends React.Component{
    
    render(){
        return (
        <>
            <div className="player-container">
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
                <button>Submit</button>
            </Link>  
        </>
        )
    }
}

export default Comparision;