
import './estilo.css';
import LogoClaro from '../../assets/logo-marca-claro.jpg';
import Logo from '../../assets/logo-marca.jpg';
import iconeSol from '../../assets/sun.png';
import iconeLua from '../../assets/moon.png';

export default function Topo(props){
    return(
        <header className={props.ehTemaEscuro ? "topoEscuro" : "topoClaro"}>
                <img className='icone-logo' src={props.ehTemaEscuro ? Logo : LogoClaro} alt="logo"/>
            
            <div id='links-topo' className={props.ehTemaEscuro ? "linksEscuros" : "linksClaro"}>
                <a href="#Home">Home</a>
                <a href="#Sobre">Sobre</a>
                <a href="#Habilidades">Habilidades</a>
                <a href='#Certificados'>Certificados</a>
                <a href="#Contato">Contato</a>
            </div>
            <button onClick={props.alterarTema} className={props.ehTemaEscuro ? "botao-escuro" : "botao-claro"}><img className='imgButton' src={props.ehTemaEscuro ? iconeSol : iconeLua} alt="icone"/></button>
        </header>
    );
}