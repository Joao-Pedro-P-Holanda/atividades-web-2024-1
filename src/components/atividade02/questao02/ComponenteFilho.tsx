import { useContext } from "react";
import { NumeroPokemonContext } from "./NumeroPokemonContext";
import ComponenteNeto from "./ComponenteNeto";

const ComponenteFilho = () => {
    const numero = useContext(NumeroPokemonContext);
    return (
        <>
            <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}></img>
            </div>
            <NumeroPokemonContext.Provider value={numero + 1}>
                <ComponenteNeto />
            </NumeroPokemonContext.Provider>
        </>

    );
}

export default ComponenteFilho