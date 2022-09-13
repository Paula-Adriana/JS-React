import './Colaborador.css'

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>

            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador

/**
 * VIA DESESTRUTURAÇÃO - sem props - declara o que vai utilizar
 * 
 * import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo}) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador
 */