import './estilo.css';
import Html from '../../assets/html.png'
import Css from '../../assets/css.jpg'
import Js from '../../assets/js.jpg'
import React from '../../assets/react.png'


export default function Sobre(props){
    return(
        <section id='Sobre' className={props.ehTemaEscuro ? "sobre-escuro" : "sobre-claro"}>
            <div className='descricao'>
            <h3 className={props.ehTemaEscuro ? "h3-escuro" : "h3claro"}>SOBRE</h3>
            <p className={props.ehTemaEscuro ? "p-escuro" : "p-claro"}>Atualmente resido em Natal/Rn, tenho 19 anos e a um ano estudo incansavelmente todos os dias para conseguir minha primeira oportunidade na área. 
            Tenho mantido meu foco e interesse em aprender e me aperfeiçoar cada vez mais na área de programação Front-End.
            Sou apaixonada nesse mundo de tecnologia e quero me aprofundar cada vez mais nele. </p>
            </div>
        </section>
    );
}