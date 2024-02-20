// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import './Navbar.css';
// const Navbar = () => {
//     return (
//         <div>
//             <div className='nav'>
//             <NavLink to='/home'><button>home</button></NavLink>
//             <NavLink to='/about'><button>about</button></NavLink>
//             <NavLink to='/frontpage'><button>sign up/login in</button></NavLink>
//             </div>
//             <div>
//                 <Outlet />
//             </div>
            
            
            

//         </div>
//     );
// };



// export default Navbar;
import React,{useContext,useEffect,useState,useNavigate}from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';
import isLoggedIn from '../Context.js/Global';


const Navbar = () => {
    const navigate=useNavigate()
    const handleOnClick=()=>{
        navigate('/home')
    }

    const [login, setLogin] = useState(false);

    useEffect(() => {
        const uname = localStorage.getItem('uname');
        if (uname) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }, []);
    return (
        <div className='navbar-fixed'>
            <div className='nav'>
                <NavLink to='/home'><button>home</button></NavLink>
                <NavLink to='/about'><button>about</button></NavLink>
                
                {login ? (
                    <>
                        <NavLink to='/welcome'><button >Profile</button></NavLink>
                        <button onClick={handleOnClick}>Logout</button>
                    </>
                ) : (
                    <NavLink to='/frontpage'><button>Sign up/Login</button></NavLink>
                )}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Navbar;

