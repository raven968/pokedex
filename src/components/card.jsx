import React from 'react';
import '../assets/css/card.css'

const img = './img/arceus.jpeg'

let pokemon = {}
const getPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/305',{
        method: 'GET'
    });
    pokemon = await response.json();
}
getPokemon();

const Card = () => {

    return (
        <div className='content'>
            <div className='container'>
                <div className='header'>
                    <div>
                        <p>
                            {pokemon.name}
                        </p>
                        <img src={img} alt="pokemon" width='130px' />    
                    </div>

                </div>
                {/*Stats and Info area*/}
                <div className='info'>
                    <div>
                        <div>
                            name
                        </div>
                        <div className='stats'>
                            <div>
                                hp ---- atack
                            </div>
                            <div>
                                defense --- speed
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;