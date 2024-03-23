
import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextD = () => {
    const cores = useContext(ColorTheme)
    return (
        <div>
            <h1 style={{ color: cores.bkgD }}>
                Contexto D
            </h1>
        </div>
        /*utilizando Consumer do Context
        <ColorTheme.Consumer>
            {
                (value) => {
                    return (
                        <div>
                            <h1 style={{ color: value.bkgD }}>
                                Contexto D
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>
        */
    )
}

export default FunctionContextD