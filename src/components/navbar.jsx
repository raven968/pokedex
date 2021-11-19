import React from 'react';
import '../assets/css/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                Raven Web
            </div>
            <div className='title'>
                <div>
                    <h3>
                        Pokedex
                    </h3>
                    Find you'r favourite Pokemon's
                </div>
            </div>
            <div className='title'>
                Develop with React JS and Pokemon API
            </div>
        </div>
    );
}

export default Navbar;