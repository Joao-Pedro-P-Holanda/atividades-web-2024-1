import { useState } from "react";
import { NumeroPokemonContext } from "./NumeroPokemonContext";
import ComponenteFilho from "./ComponenteFilho";
import BotaoIncrementarContador from "./BotaoContador";
import BotaoResetarContador from "./BotaoZerarContador";

const ComponenteAvo = () => {
    /*id inicia como estado para que possa ser alterado pelos botoes, 
      mas os outros componentes recebem o valor por contexto*/
    const [contador, setContador] = useState(1);
    return (
        <>
            <NumeroPokemonContext.Provider value={contador + 1}>
                <div>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`}></img>
                </div>
                <ComponenteFilho />
                <BotaoIncrementarContador setter={setContador} />
                <BotaoResetarContador setter={setContador} />
            </NumeroPokemonContext.Provider >
        </>
    );
}

export default ComponenteAvo