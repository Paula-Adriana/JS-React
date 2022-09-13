import './Botao.css'

const Botao = (props) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}

export default Botao
//todo componente tem children, tudo que está escrito entre a abertura 
//e fechamento do botao podendo ser icone ou outra coisa, será passado para
// cá com essa propriedade. 