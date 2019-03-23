import React from 'react';
import { NavLink} from 'react-router-dom';

const  Header = () => {
    return(
        <div className='header'>
            <div className='logo'>
                <NavLink to='/'><h2>Weather App</h2></NavLink>
            </div>

            <ul className='nav-links'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/forecast/current'>Current Forecast</NavLink></li>
                <li><NavLink to='/forecast/seven-day'>7 day forecast</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;