
const Memoria = ({ nome, preco }: { nome: string, preco: number }) => {
    return <h4>Memória RAM {nome}, preço: {preco}</h4>
}

const PlacaMae = ({ nome, preco }: { nome: string, preco: number }) => {
    return <h4>Placa Mãe {nome}, preço: {preco}</h4>
}

const PlacaVideo = ({ nome, preco }: { nome: string, preco: number }) => {
    return <h4>Placa de vídeo {nome}, preço: {preco}</h4>
}

const MeuPc = () => {
    return (
        <div>
            <h2>Meu PC</h2>
            <Memoria nome="Corsair Vengeance" preco={199.99} />
            <PlacaMae nome="ASUS ROG Strix" preco={299.99} />
            <PlacaVideo nome="NVIDIA GeForce RTX 3080" preco={699.99} />
        </div>
    );
}

export default MeuPc;