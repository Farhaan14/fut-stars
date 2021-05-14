import fire from '../pages/fire';
import '../pages/Login.css';
import React from 'react';
import {Link} from 'react-router-dom';
import './logout.css';

class Logout extends React.Component {
  componentDidMount(){
    fire.auth().signOut();
  }
  render(){
    return(
      <>
      <div className="logout-cont">
        <h1 className="thank-you">Thank You !</h1>
        <h2 className="thank-you-text">for choosing <span className="fut-stars">Fut Stars</span></h2>
        <Link to='/' className="logout-link">
                <button className="return-to-signin">Return to SignIn Page</button>
        </Link>
        </div> 
      </>
    );
  }
}
  export default Logout;