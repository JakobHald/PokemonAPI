import PokemonList from "../../components/pokemonList/PokemonList";
import styles from './homepage.module.css';

const HomePage = () => {


    return (
        <div className={"center-page"}>
            <div className={styles.pokemonBox}>
                <PokemonList></PokemonList>
            </div>
        </div>
    );
};
export default HomePage;