import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (

        //cada time é uma section
        // renderização condicional - se a primeira parte for verdadeira
        //array > 0 traz a section que é o operador da direita.
        //se nao houver nenhum time naquela seção, não renderiza
        (props.colaboradores.length) > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}} >{props.nome}</h3>

            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador
             corDeFundo={props.corPrimaria}
             key={colaborador.nome}
             nome={colaborador.nome}
             cargo={colaborador.cargo}
             imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time
/**
 * Com operador ternário:
 * (props.colaboradores.length) > 0 ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}} >{props.nome}</h3>

            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador
             nome={colaborador.nome}
             cargo={colaborador.cargo}
             imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ''

        ou seja: se a primeira parte for verdade ? traga tudo isso
        senão :
        traga '' string vazia
 */