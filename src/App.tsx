
import './App.css'
import Pai from './components/atividade01/questao01/Pai'
import MeuPc from './components/atividade01/questao02/MeuPc'
import { Arena, Heroi, Inimigo, Mundo } from './components/atividade01/questao03/Batalha'
import FunctionContextA from './components/atividade02/questao01/FunctionContextA'
import ComponenteAvo from './components/atividade02/questao02/ComponenteAvo'

function App() {

  return (
    <>
      <div className='atividade' id='atividade-1'>
        <h2>Atividade 1</h2>
        <div className='questao'>
          <h3>Questão 1</h3>
          <Pai />
        </div>
        <div className='questao'>
          <h3>Questão 2</h3>
          <MeuPc />
        </div>
        <div className='questao'>
          <h3>Questão 3</h3>
          <Mundo>
            <Arena nome='Gotham City'>
              <Heroi nome='Batman' imagem='https://www.superherodb.com/gallery2/075/70/7098.webp' />
              <Inimigo nome='Coringa' imagem='https://www.superherodb.com/gallery2/075/59/5923.webp' />
            </Arena>
          </Mundo>
        </div>
      </div>
      <div className='atividade' id='atividade-2'>
        <h2>Atividade 2</h2>
        <div className='questao'>
          <h3>Questão 1</h3>
          <ComponenteAvo />
        </div>
        <div className='questao'>
          <h3>Questão 2</h3>
          <FunctionContextA />
        </div>

      </div>
    </>
  )
}

export default App
