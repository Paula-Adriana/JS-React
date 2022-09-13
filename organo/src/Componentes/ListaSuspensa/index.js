import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    //console.log(props.itens)
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.required}
                value={props.valor}>
                <option value=""></option>

                {/**.map: usado prara iterar um array para renderizar na tela
                 * para cada item dessa lista haverá uma option
                 * key: cada option da lista (cada item) precisa ter essa propriedade
                 * - que é única - pode ser o mesmo nome do item.
                */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
                
                {/**.map = para percorrer cada item da lista eu tenho: item =>
                 * para cada item retornar uma option, imprimindo esse valor
                 Outra forma de escrever:
                 {props.itens.map(item => {
                    return <option>{item}</option>)}
                 */}
            </select>
        </div>
    )
}

export default ListaSuspensa