import React from 'react';
import '../../App.css';
import barca from '../images/home_teams/barca.png'
import united from '../images/home_teams/united.png'
import city from '../images/home_teams/city.png'
import psg from '../images/home_teams/psg.png'
import ball from '../images/ball.png'
import Navbar from '../Navbar';


export default class Home extends React.Component {

  render(){
  return (
    
    <>
          <Navbar />
          <div className='home'>
            <h1>CHOOSE YOUR HEROES FROM THE FIELD</h1>
            <h2>Draft them and go head to head against the best</h2>
          </div>
          <div className="p-bg">
          <p className="website-info">Fut Stars gives the teams the opportunity to infuse their squad with new talent. Some players will provide an instant boost to the team that selects them; others won’t. But the chance that drafted players will lead their new clubs to glory makes teams compete over talent.</p>
          </div>
          <div className='logos'>
            <img className="home-img" src={barca} alt="barca"></img>
            <img className="home-img" src={united} alt="united"></img>
            <img className="rotate home-img" src={ball} alt="ball"></img>
            <img className="home-img" src={city} alt="city"></img>
            <img className="home-img"  src={psg} alt="psg"></img>
            
          </div>
          <div className="footer-container">
            <footer>
              <div className="footer">
                <div className="sec aboutus">
                  <h3 className="footer-h3">About Us</h3>
                  <p className="footer-p">Ad irure minim cillum eiusmod ex cillum eiusmod ut tempor non magna amet ullamco reprehenderit. Est pariatur laboris do cillum ut in ad fugiat. Excepteur aute excepteur mollit voluptate dolore esse sit. Nostrud est sunt cupidatat culpa velit occaecat cillum occaecat eu tempor laborum culpa exercitation.</p>
                  <ul className="sci">
                  <li><a  href="https://github.com/Fut-Stars/fut-stars"><i className="fab fa-github" aria-hidden="true"></i> </a></li>
                </ul>
                </div>
                <div className="sec contact">
                  <h3 className="footer-h3">Contact</h3>
                  <ul className="info">
                    <li>
                      <p className="footer-p"><a href="https://github.com/Dimish18">Dimish18</a></p>
                    </li>
                    <li>
                      <p className="footer-p"><a href="https://github.com/Farhaan14">Farhaan14</a></p>
                    </li>
                    <li>
                      <p className="footer-p"><a href="https://github.com/VTPrince">VTPrince</a></p>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
    </>
  );
  }
}
