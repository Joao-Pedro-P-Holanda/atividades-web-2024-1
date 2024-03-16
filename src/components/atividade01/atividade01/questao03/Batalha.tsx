import { ReactElement } from "react"
import "./Batalha.css"

const Heroi = ({ nome, imagem }: { nome: string, arena?: string, imagem: string }) => {
    return (
        <div>
            <h4>{nome}</h4>
            <img src={imagem}></img>
        </div>
    )
}

const Inimigo = ({ nome, imagem }: { nome: string, arena?: string, imagem: string }) => {
    return (
        <div>
            <h4>{nome}</h4>
            <img src={imagem}></img>
        </div>
    )
}

const Arena = ({ nome, children }: { nome: string, children?: ReactElement | ReactElement[] }) => {
    return (
        <>
            <h3>{nome}</h3>

            <div className="arena-lutadores">
                {children}
            </div>
        </>
    )
}

const Mundo = ({ children }: { children?: ReactElement | ReactElement[] }) => {
    return (
        <>
            {children}
        </>
    )
}

export { Arena, Inimigo, Heroi, Mundo }
