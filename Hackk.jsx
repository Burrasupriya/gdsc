import React from 'react';
import './Hackk.css';
import { useNavigate } from 'react-router-dom';

const Hackk = () => {
    const navigate=useNavigate();
    const handleOnclick=()=>{
        navigate('/lunch')
    }
    return (
        <div class="one">
            <div class="two">
            <img src="https://thumbs.dreamstime.com/b/orphanage-icon-simple-black-design-isolated-white-background-orphanage-logo-design-orphanage-icon-simple-black-design-243469515.jpg" alt="" width="300px" height="200px"></img>
            </div>
        
            <div class="three">
                <h1>Mother Teresa Orphanage</h1>
                <h3>Total Members : 250 </h3>
                <h2>Address</h2>
                <h3>Door no. 153/1 , Main Road , Gandi Nagar ,</h3>
                <h3>Bhimavaram</h3>
            </div>
            <div class="four">
            <button class="breakfast">Breakfast</button>
            <button class="lunch" onClick={handleOnclick}>Lunch</button>
            <button class="snacks">Snacks</button>
            <button class="dinner">Dinner</button>
            </div>
        </div>
    );
};

export default Hackk
