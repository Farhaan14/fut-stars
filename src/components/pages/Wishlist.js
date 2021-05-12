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
    
    render(){

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

                div.innerHTML = "";

                for(i=0; i<documents.length; i++){

                    var newDiv = document.createElement('div');
                    newDiv.className = "wishlist-item";

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
                    
                    var id = parseInt(documents[i].id)
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
                    a.onclick = handleClick;

                    a.appendChild(newDiv);
                    div.appendChild(a);
                    
                }

            })
            
        }

        return(
            <>
                <Navbar />
                <h4 className="page-heading wishlist-title">Wishlist</h4>
                <div id="wishlist-list" className="wishlist-list"></div>
            </>
        )
    }
}

export default Wishlist;