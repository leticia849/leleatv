// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import Curso from "./curso"


const Courses = () => {
    return (
        <div>
            <div class="row">
                <h5>Cursos</h5>
                <Curso 
                    title="Física" 
                    descReveal="Ciência que investiga as leis do universo no que diz respeito à matéria e à energia, que são seus constituintes, e suas interações." 
                    reveal="Descrição" 
                    link="Clique para saber mais" />
                <Curso title="Química" 
                    descReveal="estudo científico da constituição da matéria, suas propriedades, transformações e as leis que as regem." 
                    reveal="Descrição" 
                    link="Clique para saber mais" />
                <Curso title="Português" 
                    descReveal="Estudo da gramática da língua portuguesa e seus campos, abrangendo desde a escrita até a fala." 
                    reveal="Descrição" 
                    link="Clique para saber mais" />

            </div>
        </div>
    );
};

export default Courses;