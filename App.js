import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './webpages/Home';
import Frontpage from './webpages/Frontpage';
import Welcome from './webpages/Welcome';
import Viewdona from './webpages/Viewdona';
import Regidona from './webpages/Regidona';
import Location from './webpages/Location';
import Hack from './webpages/Hack';
import Hackk from './webpages/Hackk';
import Lunch from './webpages/Lunch';
import Tick from './webpages/Tick';
import About from './webpages/About';
import Navbar from './webpages/Navbar';
import isLoggedIn from './Context.js/Global';
const App = () => {
  const[login,setLogin]=useState(false)
  
  const root = createBrowserRouter([
    {
      path: '/', element: <Navbar />,
      children: [
        { path: '/about', element: <About /> },
        { path: '/home', element: <Home /> },
        { path: '/frontpage', element: <Frontpage /> },
        { path: '/welcome', element: <Welcome /> },
        { path: '/viewdona', element: <Viewdona /> },
        { path: '/regidona', element: <Regidona /> },
        { path: '/location', element: <Location /> },
        { path: '/hack', element: <Hack /> },
        { path: '/hackk', element: <Hackk /> },
        { path: '/lunch', element: <Lunch /> },
        { path: '/tick', element: <Tick /> }
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={root} />
      {/* <isLoggedIn.Provider value={{login:login}}><Frontpage /></isLoggedIn.Provider> */}
    </div>
  );
};

export default App;