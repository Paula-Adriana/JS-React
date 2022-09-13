import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

//Formulario é um componente de função!!!! 
const Formulario = (props) => {

    //Criando estados (para cada campo de texto) escopo global
    //irá via props do formulario para o campo texto: ou seja, 
    //o campo texto está delegando o controle do estado
    //declaracao de variáveis de state (nome, variavel cargo....)
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const Salvar = (evento) => {
    //preventDefault: o comportamento padrão de um botao em um formulario
    //é submeter o conteudo, como aqui não está espepecifico nada,
    //o coportamento a ser evitado com o preventDefault é submeter e retornar
    // ao proprio endereço instantaneamente subindo a pagina
    evento.preventDefault()
    //no submit:passar esse objeto
    props.aoColaboradorCadastrado({
      nome, //sera criada uma prop chamada nome e o valor dela é a propria variavel
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')

  }
  return (
    <section className="formulario">
      <form onSubmit={Salvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
        obrigatorio={true}
        label="Nome"
        placeholder="Digite seu nome"
        valor={nome}

        //ou seja: temos acesso ao valor que foi alterado e setar o valor que recebemos
        aoAlterado={valor => setNome(valor)}

        />
        <CampoTexto
        obrigatorio={true}
        label="Cargo"
        placeholder="Digite seu cargo"
        valor={cargo}
        aoAlterado={valor => setCargo(valor)}

        />
        <CampoTexto
        label="Imagem"
        placeholder="Digite o endereço da imagem"
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}

        />
        < ListaSuspensa
        obrigatorio={true}
        label="Time"
        itens={props.times}
        valor={time}
        aoAlterado={valor =>setTime(valor)}

        />
        <Botao>
          Criar Card
          </Botao> 
      </form>
    </section>
  );
};

export default Formulario;
