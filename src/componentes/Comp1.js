import Cards from './Card';
import Acor from './Acord';
import Car from './Carru';
import Boton from './Bot';


const Historia =(props)=>{
    return(
        <div className="intro2">
            <h1 className="titu">{props.titulo}</h1>
            <Acor id="acor6" t1="IDEA" cont1="La idea se materializó el 5 de marzo de ese año, con la participación de nueve fraternidades que recorrieron las calles paceñas bailando al ritmo de las danzas tradicionales bolivianas." t2="CRECIMIENTO" cont2="Desde sus inicios, la Entrada Universitaria tuvo una gran acogida por parte de la comunidad universitaria y paceña. La participación fue creciendo año tras año, y la calidad de las presentaciones de las fraternidades también fue mejorando notablemente." t3="CONSOLIDACION" cont3=" En 1991, la Entrada Universitaria fue declarada Patrimonio Cultural de la ciudad de La Paz, y en 2006, fue elevada a la categoría de Patrimonio Cultural de Bolivia." /><br/>
            <Cards img="N5.jpg" alt="Tobas" 
                text="La Entrada Folclórica Universitaria de la Universidad Mayor de San Andrés (UMSA) es una explosión de color, música y alegría que llena las calles de La Paz cada año. Pero más allá de ser un espectáculo visualmente impactante, esta festividad tiene una rica historia que refleja la identidad cultural de la universidad y del país."/><br/>
            <Car id="carrusel6" img0="E1.jpg" img1="E2.jpg" img2="E3.jpg"/><br/>
            <Boton ilust="ent1.jpg" text="La historia de la Entrada Universitaria se remonta al año 1988, cuando un grupo de estudiantes, liderados por Luis Sempértegui, tuvo la iniciativa de crear una festividad que reflejara la diversidad cultural de Bolivia y fomentara el sentido de pertenencia a la comunidad universitaria. "/>

            <Acor id="acor7" t1="ESPECTACULO" cont1="La Entrada Universitaria no es solo un espectáculo visualmente atractivo." t2="EXPRESION" cont2="Es una expresión de la identidad cultural boliviana, una oportunidad para que los estudiantes y la población en general disfruten de la riqueza cultural del país." t3="PATRIMONIO" cont3="Además, la Entrada Universitaria también es un espacio para la reflexión sobre la importancia de la preservación del patrimonio cultural y la promoción de la diversidad cultural." /><br/>
            <Cards img="N2.jpg" alt="Tobas" 
                text="En la actualidad, la Entrada Folclórica Universitaria de la UMSA es una de las festividades más importantes de Bolivia. Se celebra cada año el sábado previo al Domingo de Tentaciones, y reúne a más de 70 fraternidades de diferentes facultades y carreras de la UMSA, así como a grupos invitados de otras universidades del país."/><br/>
            <Car id="carrusel7" img0="E4.jpg" img1="E55.jpg" img2="E6.jpg"/><br/>
            <Boton ilust="ent2.jpg" text="A lo largo de sus más de 30 años de historia, la Entrada Folclórica Universitaria de la UMSA ha dejado un legado cultural invaluable. Ha contribuido a la preservación y difusión de las danzas tradicionales bolivianas."/>

            <Acor id="acor8" t1="ACTUALMENTE" cont1="Hoy en día, la Entrada Folclórica Universitaria de la UMSA sigue siendo una de las festividades más populares y queridas de Bolivia." t2="EVENTO" cont2="Es un evento que reúne a miles de personas de todas las edades y estratos sociales, y que contribuye a fortalecer la identidad cultural del país." t3="FOMENTO" cont3="El sentido de identidad cultural entre los estudiantes ha convertido a la UMSA en un referente cultural en Bolivia." /><br/>
            <Cards img="N3.jpg" alt="Tobas" 
                text="La UMSA es la responsable de la organización general de la Entrada Universitaria, incluyendo la convocatoria a las fraternidades, la elaboración de las bases de participación, la coordinación con las autoridades locales y la logística del evento."/><br/>
            <Car id="carrusel8" img0="E7.jpg" img1="E8.jpg" img2="E9.jpg"/><br/>
            <Boton ilust="DIF.jpg" text="La universidad también se encarga de la difusión de la Entrada Universitaria a través de sus canales de comunicación y la promoción de la misma en la comunidad paceña y nacional."/>

            <Acor id="acor9" t1="FRATERNIDADES" cont1="Las fraternidades de la UMSA son el corazón de la Entrada Universitaria." t2="AGRUPACIONES" cont2="Estas agrupaciones de estudiantes representan a las diferentes facultades y carreras de la universidad." t3="ENCARGAN" cont3="Se encargan de preparar las coreografías, la vestimenta y la música de sus presentaciones." /><br/>
            <Cards img="N4.jpg" alt="Tobas" 
                text="La participación en la Entrada Universitaria es voluntaria, pero requiere un gran compromiso de tiempo y esfuerzo por parte de los estudiantes. "/><br/>
            <Car id="carrusel9" img0="coreo10.jpg" img1="coreo11.jpg" img2="coreo12.jpg"/><br/>
            <Boton ilust="practica un.jpg" text="Las fraternidades comienzan a preparar sus presentaciones con meses de anticipación, y ensayan arduamente para ofrecer un espectáculo de calidad."/>

            <Acor id="acor10" t1="SIMBOLO" cont1="La Entrada Universitaria se ha convertido en un símbolo de identidad para la UMSA y para la ciudad de La Paz." t2="FESTIVIDAD" cont2="Es una festividad que refleja la riqueza cultural de Bolivia y que promueve la unidad entre los estudiantes y la comunidad en general." t3="PATRIMONIO CULTURAL" cont3="La Entrada Universitaria también es un espacio para la reflexión sobre la importancia de la preservación del patrimonio cultural y la promoción de la diversidad cultural." /><br/>
            <Cards img="N1.jpg" alt="Tobas" 
                text="La UMSA ha realizado la creación de la Comisión de la Entrada Folklorica Universitaria, encargada de la organización y coordinación del evento."/><br/>
            <Car id="carrusel10"img0="E13.jpg" img1="E14.jpg" img2="E15.jpg"/><br/>
            <Boton ilust="CONV.jpg" text="La UMSA ha elaborado las bases de participación, que establecen las normas y requisitos para las fraternidades."/>
            
        </div>
            
    )
}
export default Historia;