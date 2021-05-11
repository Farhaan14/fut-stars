import React from 'react';
import Navbar from '../Navbar';
import firebase from 'firebase';
// import 'firebase/storage';
import 'firebase/firestore';


class Wishlist extends React.Component{
    componentDidMount(){
        var user = firebase.auth().currentUser;
        var playerID = localStorage.getItem("id");
        const projectFirestore = firebase.firestore();

        if (user != null) {
            projectFirestore.collection(user.uid)
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => doc.data());
                    console.log(documents);
            })
            
        }
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