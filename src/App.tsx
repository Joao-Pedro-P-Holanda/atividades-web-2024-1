
import './App.css'
import Pai from './components/atividade01/atividade01/questao01/Pai'
import MeuPc from './components/atividade01/atividade01/questao02/MeuPc'
import { Arena, Heroi, Inimigo, Mundo } from './components/atividade01/atividade01/questao03/Batalha'

function App() {

  return (
    <>
      <div className='atividade' id='atividade-1'>
        <div className='questao'>
          <Pai />
        </div>
        <div className='questao'>
          <MeuPc />
        </div>
        <div className='questao'>
          <Mundo>
            <Arena nome='Gotham City'>
              <Heroi nome='Batman' imagem='https://www.superherodb.com/gallery2/075/70/7098.webp' />
              <Inimigo nome='Coringa' imagem='https://www.superherodb.com/gallery2/075/59/5923.webp' />
            </Arena>
          </Mundo>
        </div>
      </div>
    </>
  )
}

export default App
