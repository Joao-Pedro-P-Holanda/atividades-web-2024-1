import { Dispatch, SetStateAction } from "react"
import "./Botao.css"

const BotaoResetarContador = ({ setter }: { setter: Dispatch<SetStateAction<number>> }) => {
    function resetar() {
        setter(1)
    }
    return (
        <button className="resetter" onClick={() => resetar()}> Zerar contagem</button>
    )
}

export default BotaoResetarContador