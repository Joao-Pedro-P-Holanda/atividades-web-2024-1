import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"
import { useContext } from "react"

const FunctionContextC = () => {
    const cores = useContext(ColorTheme)
    return (
        <div>
            <h1 style={{ color: cores.bkgC }}>
                Contexto C
            </h1>
            <FunctionContextD />
        </div>
        /*utilizando Consumer do Context
        <ColorTheme.Consumer>
            {
                (value) => {
                    return (
                        <div>
                            <h1 style={{ color: value.bkgC }}>
                                Contexto C
                            </h1>
                            <FunctionContextD />
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>
        */
    )
}

export default FunctionContextC