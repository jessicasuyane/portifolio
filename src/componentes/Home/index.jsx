import './estilo.css';
import bannerClaro from '../../assets/bannerclaro.jpg';
import bannerEscuro from '../../assets/bannerescuro.png'

export default function Home(props){
    return(
       <section id='home' className={props.ehTemaEscuro ? "secaoBannerEscuro" : "secaoBannerClaro"}>
        <img className='imgBanner' src={props.ehTemaEscuro ? bannerEscuro : bannerClaro} alt='banner'/>
        <div className='apresentacao'>
            <h1 className={props.ehTemaEscuro ? "tituloEscuro" : "tituloClaro"}>Olá, me chamo  <span className={props.ehTemaEscuro ? "spanEscuro" : "spanClaro"}>Jessica Suyane </span></h1>
            <p className={props.ehTemaEscuro ? "p-bannerEscuro" : "p-bannerClaro" }>Sou Desenvolvedora Front-end </p>
        </div>
       </section>
    );
}