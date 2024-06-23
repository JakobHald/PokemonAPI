import { useEffect, useState } from "react";
import PokemonListItem from "../pokemonListItem/PokemonListItem";
import styles from './pokemonList.module.css';
import Counter from "../counter/Counter";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=5";

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [pokeCount, setPokeCount] = useState(0)

    console.log(pokeCount)


    useEffect(() => {
        const getPokemon = async () => {
            
                const response = await fetch(POKEMON_API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch Pokémon data");
                }
                const data = await response.json();
                
                const detailedPokemonPromises = data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    return res.json();
                });
                
                const detailedPokemon = await Promise.all(detailedPokemonPromises);
                setPokemon(detailedPokemon);
            
        };

        getPokemon();
    }, []);

   

    return (
        <>
            <Counter pokeCount={pokeCount} setPokeCount={setPokeCount}></Counter>
            <div className={styles.pokemonList}>
                {pokemon.map((pokemon, index) => (
                    <PokemonListItem pokeCount={pokeCount} index={index} key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
            
        </>
    );
};

export default PokemonList;
