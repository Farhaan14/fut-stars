import fire from '../pages/fire';
import '../pages/Login.css';
import React from 'react';
import {Link} from 'react-router-dom';

class Logout extends React.Component {
  componentDidMount(){
    fire.auth().signOut();
  }
  render(){
    return(
      <>
        <Link to='/'>
                <button className="return-to-signin">Return to SignIn Page</button>
        </Link>
      </>
    );
  }
}
  export default Logout;