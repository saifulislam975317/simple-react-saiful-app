import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css'

const Players = (props) => {
    
    const {name,salary,img}=props.player;
    const  handleAddPlayer=props.handleAddPlayer
    return (
        
        <div className="players-container">
            
        <div className="single-player-container">
            <h2>{name}</h2>
            <img src={img} alt=""/>
            <h3>salary:{salary}</h3>
            <button onClick={()=> handleAddPlayer(props.player)} className="addButton"> <FontAwesomeIcon icon={faUserPlus}/> add to player</button>
        
        </div>
            
           
        </div>

         

        

        
    );
};

export default Players;