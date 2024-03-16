function exibir_faixa_peso(imc: number) {
    if (imc < 18) {
        return <h4>Abaixo do peso</h4>
    }
    else if (imc > 25) {
        return <h4>Acima do Peso</h4>
    }
    else {
        return <h4>Peso ideal</h4>
    }
}

const Imc = ({ peso, altura }: { peso: number, altura: number }) => {
    const imc = peso / altura ** 2;
    return (
        <div>
            <h4>IMC é:</h4>
            <p>{imc.toFixed(2)}</p>
            {exibir_faixa_peso(imc)}
        </div>
    )
}

export default Imc;