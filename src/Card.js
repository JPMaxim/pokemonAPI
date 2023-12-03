import {NewPokemon} from "./Form"
import { Abilities } from "./Abilities"
import { Stats } from "./Stats"

export const Card = ({pokemon, fetchPokemon}) => {
    return (
        <div className="mainContainer">

            <div id="imageContainer" className="mainSubcontainer">
                <img id="sprite" src={pokemon.sprites.front_default}></img>
            </div>

            <div className="mainSubcontainer">
                <h2>{`${pokemon.name}'s base stats:`}</h2>
                <div className="pokemonStats">
                    {pokemon.stats.map((el, index) => {
                        return <Stats 
                            stat={el}
                            key={index}
                        />
                    })}            
                </div>
            </div>                  

            <div className="mainSubcontainer">
                <h2>{`${pokemon.name}'s abilities:`}</h2>
                {pokemon.abilities.map((el, index) => {
                    return <Abilities 
                        ability={el}
                        key={index}
                    />
                })}
            </div>

        </div>
    )
}