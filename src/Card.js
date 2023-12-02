import {NewPokemon} from "./Form"
import { Abilities } from "./Abilities"
import { Stats } from "./Stats"

export const Card = ({pokemon, fetchPokemon}) => {
    return (
        <div>
            <h2>{`${pokemon.name}'s stats:`}</h2>
            {pokemon.stats.map((el, index) => {
                return <Stats 
                    stat={el}
                    key={index}
                />
            })}

            <h2>{`${pokemon.name}'s abilities:`}</h2>
            {pokemon.abilities.map((el, index) => {
                return <Abilities 
                    ability={el}
                    key={index}
                />
            })}
            <h2>Image</h2>
            <img src={pokemon.sprites.front_default}></img>
        </div>
    )
}