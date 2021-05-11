import React from 'react';
import Navbar from '../Navbar';
import firebase from 'firebase';
import 'firebase/firestore';
import './wishlist.css';

import {Footballers} from '../../dataset/data'

const handleClick = (e) => {
    localStorage.setItem('id', e.currentTarget.id);
    // console.log(e.currentTarget.id);
}

class Wishlist extends React.Component{
    

    componentDidMount(){
        var user = firebase.auth().currentUser;
        const projectFirestore = firebase.firestore();

        if (user != null) {
            projectFirestore.collection(user.uid)
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => doc.data());
                console.clear();
                // console.log(documents);
                // console.log(typeof(Object.values(documents)));

                var i;
                var div = document.getElementById("wishlist-list");

                for(i=0; i<documents.length; i++){

                    var a = document.createElement('a');
                    a.href = "/Info";

                    var newDiv = document.createElement('div');
                    newDiv.className = "wishlist-element";
                    
                    var id = parseInt(documents[i].id)
                    newDiv.innerHTML = Footballers[id].name;
                    newDiv.id = id;
                    newDiv.onclick = handleClick;

                    a.appendChild(newDiv);

                    div.appendChild(a);
                    
                }

            })
            
        }
    }
    render(){
        return(
            <>
                <Navbar />
                <h1>Wishlist</h1>
                <div id="wishlist-list" className="wishlist-list"></div>
            </>
        )
    }
}

export default Wishlist;