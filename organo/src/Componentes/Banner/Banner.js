//importando CSS
import './Banner.css'

function Banner() {
    //JSX: forma como o react trabalha a parte visual, parece html mas não é.
    // O que o React faz por debaixo dos panos é interpretar a tag img (por exemplo)
    // e fazer o append no DOM
    return (
        <header className="banner"> 
            <img src="./imagens/banner.png" alt="Banner principal"/>
        </header>
        
    )
}

export default Banner