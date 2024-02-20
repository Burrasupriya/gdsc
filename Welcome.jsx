import React from 'react';
import './Welcome.css';
import { NavLink } from 'react-router-dom';

const Welcome = () => {
    const data = [
        {
            OrName: 'mother theresa',
            Orgnizer: 'ram',
            residents: 100
        }
        // {
        //     OrName: 'theresa',
        //     Orgnizer: 'ram',
        //     residents: 100
        // },
        // {
        //     OrName: 'mother',
        //     Orgnizer: 'ram',
        //     residents: 100
        // }
    ];
    const item=data[0];

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Welcome to {data[0].OrName}</h1>

            {/* {data.map(item => (
                    <li key={item.OrName}>
                        <div className='organizationdetail'>
                            <div>
                                <img src='' alt='image of orphanage' />
                            </div>
                            <div>
                                <p>Organization name: {item.OrName}</p>
                                <p>Organizer name: {item.Orgnizer}</p>
                                <p>No. of residents in the organization: {item.residents}</p>
                                <button>Edit</button>
                                <button>Save</button>
                            </div>
                        </div>
                    </li>
                ))} */}

            <div className='organizationdetail'>
                <div>
                    <img src='' alt='image of orphanage' />
                </div>
                <div>
                    <p>Organization name: {item.OrName}</p>
                    <p>Organizer name: {item.Orgnizer}</p>
                    <p>No. of residents in the organization: {item.residents}</p>
                    <button>Edit</button>
                    <button>Save</button>
                </div>
            </div>



            <p style={{ textAlign: 'center' }}><NavLink to='/viewdona'>View donation</NavLink></p>
        </div>
    );
};

export default Welcome;
