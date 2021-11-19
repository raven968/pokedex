import React, { useState, useEffect } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import '../assets/css/card.css'

//const img = './img/arceus.jpeg'



const Card = () => {
    
    //state of the pokemon
    const [pokemon, setPokemon] = useState({
        loading: true,
        data: {}
    })
    //state for the search
    const [search, setSearch] = useState('pikachu')
    //Get pokemon info
    const getPokemon = async (word) => {
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + word);
            let data = await response.json();
            setPokemon({
                loading: false,
                data: data
            })
        }catch (err){
            console.log(err)
        }
        

    }
    //initial state
    useEffect(() => {
        getPokemon('pikachu')
    }, [])
    
    const findPokemon = () => {
        setPokemon({
            loading:true,
            data: {}
        })
        getPokemon(search)
    }

    return (
        
        <div className='content'>
            { pokemon.loading ? <h3>Cargando...</h3>
            :
            <div className='container'>
                <div className='search'>
                    <input type="text" id="search" placeholder="Busca tu pokemon por nombre o numero de pokedex" onBlur={e => setSearch(e.target.value)}/>
                    <button className="btn-search" onClick={findPokemon}>Buscar</button>
                </div>
                <div className="pokemon">
                    <div className='header'>
                        <div>
                            <p>
                                No. {pokemon.data.id ?? 0}
                            </p>
                            <img src={ pokemon.data.sprites.other.dream_world.front_default } alt="pokemon" width='130px' />    
                        </div>

                    </div>
                    {/*Stats and Info area*/}
                    <div className='info'>
                        <div>
                            <div className='name'>
                                <h3>{pokemon.data.name ?? ''}</h3>
                            </div>
                            <div className='stats'>
                                <div className='stats1'>
                                    <div>
                                        <p><b>{pokemon.data.stats[0].stat.name ?? ''}</b></p>
                                        <p>{pokemon.data.stats[0].base_stat ?? ''}</p>
                                    </div>
                                    <div>
                                        <p><b>{pokemon.data.stats[2].stat.name ?? ''}</b></p>
                                        <p>{pokemon.data.stats[2].base_stat ?? ''}</p>
                                    </div>
                                </div>
                                <div className='stats2'>
                                    <div>
                                        <p><b>{pokemon.data.stats[1].stat.name ?? ''}</b></p>
                                        <p>{pokemon.data.stats[1].base_stat ?? ''}</p>
                                    </div>
                                    <div>
                                        <p><b>{pokemon.data.stats[5].stat.name ?? ''}</b></p>
                                        <p>{pokemon.data.stats[5].base_stat ?? ''}</p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div> 
                </div>
             
            </div>
            }
        </div>

    );
}

export default Card;