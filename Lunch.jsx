import React, { useState } from "react";
import { useNavigate} from "react-router-dom"; 
import "./Lunch.css";

const Lunch = () => {
    const [num, setNum] = useState('0');
    const [numm, setNumm] = useState('');
    const navigate= useNavigate(); 
    const handleNum = (e) => {
        const enteredNum = e.target.value;
        setNum(enteredNum);
        if (enteredNum <= 0) {
            setNumm("Please enter a valid number of people");
        } else {
            setNumm("");
        }
    }
     const submit=()=>{
        if (parseInt(num) > 0) {
            
            navigate('/tick')
        }
    }
    return (
        <div className="lunch-container">
            <img src="lunch.webp" alt="Lunch" />
            <h1>Lunch</h1>
            <h3>Filled: 30</h3>
            <h3>Remaining: 190</h3>
            <label>
                Enter number of people:<br />
                <input type="text" value={num} onChange={handleNum} />
            </label>
            <span className="error-message">{numm}</span><br></br>
            <button onClick={submit}>submit</button>
        </div>
    );
};
export default Lunch;