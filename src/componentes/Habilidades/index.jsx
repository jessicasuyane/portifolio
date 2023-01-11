import './estilo.css';
import Html from '../../assets/html.jpg';
import Css from '../../assets/css.jpg';
import Js from '../../assets/js.jpg';
import React from '../../assets/react.png';



export default function Habilidades(props){
    return(
        <section id='Habilidades' className={props.ehTemaEscuro ? "habilidades-escuro" : "habilidades-claro"}>
            <h3>HABILIDADES</h3>
            <div className='container-habilidades'>
              <div className='descricao-habilidades'>
                <div>
                    
                     <img  src={Html} alt='html'/>
                     <p>Hyper Text Markup Language ou HTML, É uma linguagem de marcação para desenvolver páginas e documentos eletrônicos para a internet, fornecendo informações para usuários, navegadores e mecanismos de busca.</p> </div>
                <div> 
                    
                    <img  src={Css} alt='css'/> 
                    <p>Cascading Style Sheets ou Css é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. </p></div>
                <div> 
                    
                    <img  src={Js} alt='javascript'/>
                    <p>JavaScript é uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de intessante. Ok, não tudo, mas é maravilhoso o que você pode controlar com algumas linhas de código JavaScript.</p> </div>
                <div> 
                   
                    <img  src={React} alt='react'/>
                    <p> React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário </p> </div>
                </div>
                </div>
                
           
        </section>
        
    );
}