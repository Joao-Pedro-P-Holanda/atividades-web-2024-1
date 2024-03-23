import { Dispatch, SetStateAction } from 'react';
import './Botao.css'

const BotaoIncrementarContador = ({ setter }: { setter: Dispatch<SetStateAction<number>> }) => {
    function incrementar() {
        setter((previous: number) => previous + 1);
    }
    return (
        <button className="counter" onClick={() => incrementar()} >
            Aumentar contagem
        </button>
    )
}

export default BotaoIncrementarContador