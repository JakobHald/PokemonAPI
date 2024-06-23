import { useParams } from "react-router-dom"
import styles from "./abilityList.module.css"
import { useEffect, useState } from "react";

const POKEMON_ABILITY_API = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}/`

const AbilityList = ({ abilities }) => {

    const { name } = useParams();
    const [ability, setAbility] = useState(null)

    useEffect(() => {

        const getAbilities = async () => {
            const response = await fetch(POKEMON_ABILITY_API)
            const data = await response.json()
            setAbility(data)
            console.log(data)
        }

        getAbilities()
    })

    return (
        console.log()
    )

}

export default AbilityList;