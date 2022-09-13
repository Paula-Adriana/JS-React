import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06D69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
    
  ]

  //o estado dessa variavel é um array vazio
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador )
    //no Salvar, adicionar o novo colab no array de colaboradores 
    //sintaxe: ...colaboradores antigos, o novo colaborador
    setColaboradores([...colaboradores, colaborador]) 
  }

  return (
    <div className="App">
      <Banner/>

      {/**
       * Sobre os times: iterando o array de times com o map eu vou 
       * retornar o time => e quero desse time o time.nome
       * depois da palavra formulario, times == nome da props, pode ser 
       * qq nome. Quando chamar a props chamar o nome que for 
       * colocar ali
       * 
       * Evento aoColaboradorCadastrado será ouvido no formulário,
       * quando submeter, o Salvar chamará esse metodo.
       * quando salvar, teremos acesso aos dados desse colaborador,
       * entao => guardar esse novo colab no array colaboradores 
       * que foi iniciado vazio ali em cima e então fazer um append
       * no final desse array atraves do metodo aoNovoColaboradorAdicionado*/}
      <Formulario
       times={times.map(time => time.nome)}
       
       aoColaboradorCadastrado={colaborador => 
        aoNovoColaboradorAdicionado(colaborador)}/>

      {/**Iterando sobre um array */}
      {times.map(time => <Time
      key={time.nome}
      nome={time.nome}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter
        (colaborador => colaborador.time === time.nome)}/>)}
      
    </div>
  );
}

export default App;
