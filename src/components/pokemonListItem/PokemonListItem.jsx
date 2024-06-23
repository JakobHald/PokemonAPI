import { Link } from "react-router-dom";
import styles from "./pokemonListItem.module.css"

const PokemonListItem = ({pokemon, pokeCount, index}) => {

    const ability = pokemon.moves[0]?.move?.name || "Unknown ability";
    const sprite = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default

    
    return (
        <div className={`${styles.pokemonListItem} ${pokeCount === index ? styles.active : ""}`}>
            <Link to={`/pokemon/${pokemon.name}`}>
                <div className={styles.infoContainer}>
                        <img src={sprite} alt="" />
                    <div className={styles.nameContainer}>
                        <h1 className={styles.nameBox}>{pokemon.name}</h1>
                        <h1>Lv. {pokemon.base_experience}</h1>
                    </div>
                </div>

                <div className={styles.statsBox}>
                    <p>Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                    <p>HP: {pokemon.stats[0].base_stat}</p>
                    <p>Attack: {pokemon.stats[1].base_stat}</p>
                </div>
               
            </Link>
           
        </div>
        
    )
}

export default PokemonListItem;