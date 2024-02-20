import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Location = () => {
    const navigate=useNavigate();
    const [add,setAdd]=useState('');
    const handleChange=(e)=>{
        setAdd(e.target.value);
        console.log(add);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/hack');
    }
    return (
        <div style={{textAlign:'center'}}>
            <img src='' alt='image' style={{width:'50px'}}></img>
            <p>your location</p>
            <input type='textarea' value={add} name='add' onChange={handleChange}></input>
            <button type='submit' onClick={handleSubmit}>submit</button>
        </div>
    );
};

export default Location;