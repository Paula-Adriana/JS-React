import './CampoTexto.css'
// Criando o componente:
// criar uma função dentro da constante CampoTexto (letra maiuscula mesmo)

const CampoTexto = (props) => {
    
    //usando template string
    const placeholderModificada = `${props.placeholder}...`
   
    const digitado = (evento) => { 
        props.aoAlterado(evento.target.value)
        //target: evento do JS, target tem value
        //value é atrelado ao estado, se o value muda, o estado muda tb, e o 
        //react sabe que precisa renderizar aquele componente de novo
   
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            {/**todo input tem um value */}
            <input value={props.valor}
                    //onChange: cada letra alterada no input chama a função
                   onChange={digitado}
                   required={props.obrigatorio}
                   placeholder={placeholderModificada}/> 
        </div>
    )
}

export default CampoTexto