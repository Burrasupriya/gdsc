import React from 'react';
import './Tick.css'; 

const Tick = () => {
    return (
        <div className="tick-container">
            <img src="Tick.png" style={{maxWidth :100}} />
            <h2 className="tick-heading">Request Confirmed</h2>
            <h3 className="tick-subheading">Thank You</h3>
            <h2 className="tick-heading">for donating</h2>
        </div>
    );
};

export default Tick;