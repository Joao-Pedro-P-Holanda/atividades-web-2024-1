import { useContext } from "react";
import { NumeroPokemonContext } from "./NumeroPokemonContext";

const ComponenteNeto = () => {
    const numero = useContext(NumeroPokemonContext);
    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}></img>
        </div>
    );
}

export default ComponenteNeto