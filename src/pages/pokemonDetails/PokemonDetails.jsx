import { useEffect, useState } from "react";
import styles from "./pokemonDetails.module.css"
import { Link, useParams } from "react-router-dom";

const PokemonDetails = () => {

    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {

        const getPokemon = async () => {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemon(data);
            console.log(data)
        }

        getPokemon();

    }, [name]);


    return(
        <div className={styles.pokemonDetail}>
            {pokemon && (
                <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Base Experience: {pokemon.base_experience}</p>
                    <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
                </>
            )}
            <Link to="/"><button>Back</button></Link>
        </div>

    )
}

export default PokemonDetails;