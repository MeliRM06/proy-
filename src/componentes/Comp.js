import React from 'react';
import Cards from './Card';
import Acor from './Acord';
import Car from './Carru';
import Boton from './Bot';

const Inicio = (props) => {
    return (
        <div className="intro">
            <h1 className="titu">{props.titulo}</h1>
            <Boton ilust="umsa.jpg" text="La Universidad Mayor de San Andrés (UMSA) es la principal universidad pública de Bolivia, establecida en 1830 en la ciudad de La Paz. Es la segunda universidad más antigua del país y la más representativa del Sistema de la Universidad Boliviana." />
            <Car id="carousel1" img0="u1.png" img1="U2.jpg" img2="U3.jpg" /><br />
            <Cards img="RECTOR1.jpg" alt="Rector"
                text="El primer RECTOR en ese entonces llamado “Cancelario” de la UMSA fue Don José Manuel Gregorio Indaburo, un destacado intelectual y político boliviano. Desempeñó un papel fundamental en la fundación de la universidad en 1830 y fue su líder hasta 1832." /><br />
            <Acor id="acor1" t1="RECTOR" cont1="El primer rector de la Universidad Mayor de San Andrés (UMSA) no tenía ese título formalmente, ya que la estructura y la terminología de la universidad evolucionaron con el tiempo. Sin embargo, el puesto equivalente durante los primeros años de la universidad era el de “Cancelario”." t2="PRIMER RECTOR" cont2="El primer RECTOR en ese entonces llamado “Cancelario” de la UMSA fue Don José Manuel Gregorio Indaburo, un destacado intelectual y político boliviano. Desempeñó un papel fundamental en la fundación de la universidad en 1830 y fue su líder hasta 1832." t3="LEGADO" cont3="El legado de Indaburo todavía se siente en la UMSA hoy. Es considerado uno de los padres fundadores de la universidad y sus contribuciones a la educación boliviana son ampliamente reconocidas." /><br />
            <Boton ilust="ED.jpg" text="La Carrera de Informática en la UMSA se remonta a 1973, cuando se creó como una mención dentro del Departamento de Matemática." />
            <Car id="carousel2" img0="INF1.jpg" img1="INF0.jpg" img2="INF3.png" /><br />
            <Cards img="tob.jpg" alt="Tobas"
                text="Tobas de Informatica" /><br />
            <Acor id="acor2" t1="CARRERA" cont1="La Carrera de Informática de la Universidad Mayor de San Andrés (UMSA) no formó parte de la lista de carreras desde el inicio de la universidad en 1830." t2="HISTORIA" cont2="La historia de la Carrera de Informática en la UMSA se remonta a 1973, cuando se creó como una mención dentro del Departamento de Matemática. En ese entonces, la informática era un campo relativamente nuevo y no existía una demanda suficiente para una carrera independiente." t3="MENCION" cont3="En 1984, la mención de Informática se independizó administrativamente del Departamento de Matemáticas, convirtiéndose en la Carrera de Informática. Esto se debió al rápido crecimiento de la demanda de profesionales en informática, impulsado por el desarrollo de las nuevas tecnologías emergentes y su rápida adopción en las empresas e instituciones." /><br />    
            <Boton ilust="profesionistas.jpg" text="La UMSA forma profesionales competentes, comprometidos con el desarrollo social, la investigación científica y tecnológica." />
            <Car id="carousel3" img0="pro1.png" img1="pro2.jpg" img2="pro3.jpg" /><br />
            <Cards img="proi.jpg" alt="beneficio"
                text="Los beneficios de los datos y la tecnología para la salud" /><br />
            <Acor id="acor3"  t1="Define perfiles profesionales claros y actualizados" cont1="La universidad  identifica las competencias, habilidades y conocimientos que demandan los sectores productivos y la sociedad en general." t2="Fomenta el aprendizaje práctico y experiencial" cont2="La universidad brindar oportunidades para que los estudiantes apliquen sus conocimientos y habilidades en entornos reales a través de prácticas profesionales, proyectos de investigación, simulaciones y otras experiencias prácticas." t3="Promueve la investigación y la innovación" cont3="La universidad debe fomentar una cultura de investigación y desarrollo que permita generar nuevos conocimientos y soluciones innovadoras a los problemas de la sociedad." /><br />    
            <Boton ilust="cult.jpg" text="La universidad forma profesionales comprometidos con la difusión cultural y la defensa de los valores éticos y morales." />
            <Car id="carousel4" img0="cul1.jpg" img1="cul2.jpg" img2="cul3.jpg" /><br />
            <Cards img="cult4.jpg" alt="Cultura"
                text="La cultura es importante para la universidad" /><br />
            <Acor id="acor4" t1="Noche de Talentos" cont1="Un concurso anual donde estudiantes de todas las facultades compiten en diferentes categorías como canto, baile, teatro y música." t2="Exposiciones de arte" cont2="La UMSA cuenta con varias galerías de arte que albergan exposiciones temporales de artistas locales e internacionales." t3="Conciertos" cont3="Se realizan conciertos de música clásica, folclórica, rock y otros géneros en diferentes espacios de la UMSA." /><br />
            <Boton ilust="esc.jpg" text="En el marco de la visión de la UMSA como líder en el ámbito nacional e internacional, reconocida por su excelencia académica, investigación científica y tecnológica, la vinculación social es fundamental." />
            <Car id="carousel5" img0="comp1.jpg" img1="comp2.jpg" img2="comp3.jpg" /><br />
            <Cards img="comp4.jpg" alt="tecnologia"
                text="La tecnologia esta en todos los ambitos de la sociedad." /><br />

            <Acor id="acor5" t1="FACILITA" cont1="La tecnología facilita el acceso a la información y recursos educativos de manera remota, permitiendo a los estudiantes aprender a su propio ritmo y desde cualquier lugar." t2="PLATAFORMAS" cont2="Plataformas como aulas virtuales,  y repositorios digitales complementan la educación presencial y ofrecen materiales interactivos y multimedia." t3="HERRAMIENTA" cont3="Software educativo y herramientas de simulación permiten experiencias prácticas y aprendizaje experiencial." /><br />

        </div>
    );
};

export default Inicio;
