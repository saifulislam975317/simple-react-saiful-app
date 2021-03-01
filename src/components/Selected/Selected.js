import React from 'react';
import './Selected.css'

const Selected = (props) => {

    const selected = props.selected;



    let totalSalary = 0;
    for (let i = 0; i < selected.length; i++) {
        const players = selected[i];
        totalSalary = totalSalary + players.salary;

    }
    return (
        <div className="selected-player-container">
            <h1>Selected players list for Dhaka Dynamites of BPL</h1>
            <div className="players-list">
                <h2 class="text-warning">Total selected players: {selected.length}</h2>
                

            </div>
            <div className="players-details">
            <ol>
            {
                selected.map(player => 
                <li><h5 class="text-dark">{player.name}</h5>
                 <img className="selected-img" src={player.img} alt=""/>
                <h6 class="text-primary">Salary: {player.salary}</h6>
               </li>)
            }
            </ol>

            <ul>

            </ul>
            
            </div>
            <h3>Total Salary:{totalSalary}</h3>
        </div>
    );
};

export default Selected;