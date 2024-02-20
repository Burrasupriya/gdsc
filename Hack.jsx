import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hack.css';
const Hack = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/hackk')
  }
    return (
        <div>
            <h1>Home</h1>
            <div className='card'>
                <div className='one' onClick={handleClick}>
                    <h1>Mother Teresa Orphanage</h1>
                    <h2>GandhiNagar , Bhimavaram</h2>
                    <img src="https://thumbs.dreamstime.com/b/orphanage-icon-simple-black-design-isolated-white-background-orphanage-logo-design-orphanage-icon-simple-black-design-243469515.jpg" alt="mush" width="100px" height="100px"></img>
                </div>
                
                <div className='two'>
                    <h1>Mahatma Gandhi Foundation</h1>
                    <h2>Amirpet , Bhimavaram</h2>
                    <img src="https://t4.ftcdn.net/jpg/02/04/63/89/360_F_204638958_xyjfyRaBbKlVX0OdP357fkgjUpYOlb7Z.jpg" alt="chi" width="100px" height="100px" ></img>
                </div>

                <div className='three'>
                    <h1>Jawaharlal Nehru Oldage Home</h1>
                    <h2>Two Town Police Station , Bhimavaram</h2>
                    <img src="https://www.clipartmax.com/png/small/289-2898243_all-corporate-accommodation-needs-in-one-place-old-age-home-logo.png" alt="mush" width="100px" height="100px"></img>
                </div>
                </div>
            </div>
    );
};

export default Hack;
