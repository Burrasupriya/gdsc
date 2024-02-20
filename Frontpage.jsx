import React, { useState ,useContext}from 'react';
import './Frontpage.css';
import { NavLink, useNavigate } from 'react-router-dom';
import isLoggedIn from '../Context.js/Global';

const Frontpage = () => {
    // const {login}=useContext(isLoggedIn)
    
    const navigate=useNavigate();
    const [donatorUname, setDonatorUname] = useState('');
    const [donatorPass, setDonatorPass] = useState('');
    const [organizationUname, setOrganizationUname] = useState('');
    const [organizationPass, setOrganizationPass] = useState('');

    const handleDonatorSubmit = (event) => {
        localStorage.setItem('uname',donatorUname);
        localStorage.setItem('pass',donatorPass);
        event.preventDefault();
        console.log(donatorUname);
        console.log(donatorPass);
       
        navigate('/location');
    };

    const handleOrganizationSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('uname',organizationUname);
        localStorage.setItem('pass',organizationPass);
        console.log(organizationUname);
        console.log(organizationPass);
        
        navigate('/welcome');
    };

    const handleDonatorUname = (e) => {
        setDonatorUname(e.target.value);
    };

    const handleDonatorPassword = (e) => {
        setDonatorPass(e.target.value);
    };

    const handleOrganizationUname = (e) => {
        setOrganizationUname(e.target.value);
    };

    const handleOrganizationPassword = (e) => {
        setOrganizationPass(e.target.value);
    };

    return (
        <div className='frontpage'>
            <div className='top'>
                <h1 style={{ textAlign: 'center' }}>sign in......</h1>
            </div>
            <div className='bottom' style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <h1>Sign in for donators</h1>
                    <form onSubmit={handleDonatorSubmit}>
                    <label>
                            Username:
                            <input type='text' name='uname' value={donatorUname} onChange={handleDonatorUname} />
                            <br />
                        </label>
                        <label>
                            Password:
                            <input type='password' name='pass' value={donatorPass} onChange={handleDonatorPassword} />
                            <br />
                        </label>

                        <button type='submit'>Sign in</button>

                        <p>Don't have an account? <NavLink to="/regidona">Sign up</NavLink> </p>
                    </form>
                </div>

                <div>
                    <form onSubmit={handleOrganizationSubmit}>
                        <h1>Sign in for organization</h1>
                        
                        <label>
                            Username:
                            <input type='text' name='uname' value={organizationUname} onChange={handleOrganizationUname} />
                            <br />
                        </label>
                        <label>
                            Password:
                            <input type='password' name='pass' value={organizationPass} onChange={handleOrganizationPassword} />
                            <br />
                        </label>

                        <button type='submit'>Sign in</button>

                        <p>Don't have an account? <NavLink to="/register">Sign up</NavLink> </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Frontpage;
