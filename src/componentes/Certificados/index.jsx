import './estilo.css';
import CursoHtml from '../../assets/CursoHtml.png';
import CursoCss from '../../assets/cursoCss.png';
import CursoJs from '../../assets/cursoJs.png';
import CursoReact from '../../assets/cursoReact.png';
import cursoProgramacao from '../../assets/cursoProgramacao.png';
import CursoAlgoritimo from '../../assets/CursoAlgoritimo.png';
import cursoAnalise from '../../assets/analiseDados.png';
import SetaEsquerda from '../../assets/seta-esquerda.jpg';
import SetaDireita from '../../assets/seta.jpg'

export default function Certidicados(props){
    return(
        <section id='Certificados' className={props.ehTemaEscuro ? "certi-escuro" : "certi-claro"} >
            <h3>CERTIFICADOS</h3>
            <div className='container-certificados'>
            
            <div className='container-cursos'>
               
               <div>
                   <p>Curso de Algoritimo</p>
                   <img className='slide' src={CursoAlgoritimo} alt=''/> 
               </div>
               <div>
                   <p>Curso de Html </p>
                   <img className='slide' src={CursoHtml} alt=''/>
               </div>
               <div>
                   <p>Curso de Css</p>
                   <img className='slide' src={CursoCss} alt=''/>
               </div>
               <div>
                   <p>Curso de JavaScript</p>
                   <img className='slide' src={CursoJs} alt=''/>
               </div>
               <div>
                   <p>Curso de React</p>
                   <img className='slide' src={CursoReact} alt=''/>
               </div>
               <div>
                   <p>Curso de Analista de Dados</p>
                   <img className='slide' src={cursoAnalise} alt=''/>
               </div>
               
               </div>
              
               </div>
        </section>
    );
}