import './estilo.css';
import Wpp from '../../assets/wpp.png';
import Github from '../../assets/GitHub_logo.png';
import Email from '../../assets/emai.png';
import Linkedin from '../../assets/in.jpg';


export default function Contato(props){
    return(
        <section id='Contato' className={props.ehTemaEscuro ? "contac-escuro" : "contac-claro"}>
            <h3>CONTATO</h3>
            <div>
            <div>
                <img src={Wpp} alt='Wpp'/>
                <p>84 996284179</p>
            </div>
            <div>
                <img src={Email} alt='Email'/>
                <p>jessicasuyane121@gmail.com</p>
            </div>
            <div>
                <img src={Github} alt='github'/>
                <p>GitHub.com/jessicasuyane</p>
            </div>
            <div>
                <img src={Linkedin} alt='linkedin'/>
                <p>http://LinkedIn.com/in/jéssica-suyane</p>
            </div>
            </div>
        </section>
    );
}