import { useState } from "react";
import styles from "./counter.module.css"

const Counter = ({pokeCount, setPokeCount}) => {

    if(pokeCount > 4){
        setPokeCount(0)
    } else if (pokeCount < 0){
        setPokeCount(4)
    }

    return (
        <div>
            <h1>{pokeCount}</h1>
            <button onClick={ () => setPokeCount(pokeCount + 1)}>Counter OP</button>
            <br />
            <button onClick={ () => setPokeCount(pokeCount - 1)}>Counter NED</button>
        </div>
    )
}

export default Counter;