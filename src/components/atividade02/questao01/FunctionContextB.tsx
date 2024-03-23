
import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {
    const cores = useContext(ColorTheme);

    return (
        <div>
            <h1 style={{ color: cores.bkgB }}>
                Contexto B
            </h1>
        </div>
        /*utilizando Consumer do Context
        <ColorTheme.Consumer>
            {
                (value) => {
                    return (
                        <div>
                            <h1 style={{ color: value.bkgB }}>
                                Contexto B
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>
        */
    )
}

export default FunctionContextB