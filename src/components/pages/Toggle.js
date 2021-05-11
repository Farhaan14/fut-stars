import React from 'react';
import './Toggle.css';
import firebase from 'firebase';


class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: props.isChecked || false,
      };
      
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {

        const projectFirestore = firebase.firestore();
        var playerID = localStorage.getItem("id");
        var userID = localStorage.getItem("uid");
        
        this.setState({ isChecked: !this.state.isChecked });

        if(this.state.isChecked){
            projectFirestore.collection(userID).doc(playerID).set({
                id: playerID
            })
        }
    }

    componentDidMount(){
        const projectFirestore = firebase.firestore();
        var playerID = localStorage.getItem("id");
        var userID = localStorage.getItem("uid");
        const usersRef = projectFirestore.collection(userID).doc(playerID)

        usersRef.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                // this.setState({ isChecked: !this.state.isChecked });
                document.getElementById("checkbox").checked = true;
            }
        });
    }

    componentDidUpdate(){
        const projectFirestore = firebase.firestore();
        var playerID = localStorage.getItem("id");
        var userID = localStorage.getItem("uid");
        const usersRef = projectFirestore.collection(userID).doc(playerID)

        if(!document.getElementById("checkbox").checked){
            usersRef.get()
            .then((docSnapshot) => {
            if (docSnapshot.exists) {
                usersRef.delete();
            }
        });
        }
    }


    render () {

      return (
          <div className="addplayer">
              <p className="add-to-wishlist">Add to Wishlist</p>
        <label className="switch">
          <input type="checkbox" id="checkbox" value={this.state.isChecked} onChange={this.handleChange} />
          <div className="slider"></div>
        </label>
        </div>
      );
    }
  }
  
 export default Toggle;
  