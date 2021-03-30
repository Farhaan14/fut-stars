import React from 'react';
import {Footballers} from '../../dataset/data'

export default function CompareInfo(){
    return(
        <>
            <h3>{Footballers[localStorage.getItem("id1")].name}</h3>
            <h3>{Footballers[localStorage.getItem("id2")].name}</h3>
        </>
    )
}