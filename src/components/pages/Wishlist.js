import React from 'react';
import Navbar from '../Navbar';
// import firebase from 'firebase';
// import 'firebase/storage';
// import 'firebase/firestore';


class Wishlist extends React.Component{
    componentDidMount(){
        // var user = firebase.auth().currentUser;

        // const projectFirestore = firebase.firestore();

        // console.clear();
        // if (user != null) {
        //     console.log("UID: " + user.uid);
        //     projectFirestore.collection(user.uid).doc("Players").set({
        //         id: "ID",
        //         name: "Name"
        //     })
            
        // }
    }
    render(){
        return(
            <>
                <Navbar />
                <h1>Wishlist</h1>
            </>
        )
    }
}

export default Wishlist;