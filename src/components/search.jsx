import React from 'react';
import '../assets/css/card.css'

const Search = () => {

    return(
        <div className='search'>
            <input type="text" id="search" placeholder="Busca tu pokemon por nombre o numero de pokedex" />
            <button className="btn-search">Buscar</button>
        </div>
    )
}

export default Search