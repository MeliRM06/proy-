import Cards from './Card';
import Acor from './Acord';
import Car from './Carru';
import Boton from './Bot';

const Recorrido =(props)=>{
    return(
        <div className="intro3">
            <h1 className="titu">{props.titulo}</h1>
            <Boton ilust="R2.jpg" text="La Entrada Folklorica Universitaria comienza en el final de la Autopista, cerca de la Cervecería Boliviana Nacional (CBN) . Este punto estratégico marca el inicio de la colorida procesión que se extenderá por las principales avenidas del centro paceño."/>
            <Car id="carrusel11" img0="RA1.jpg" img1="RA2.jpg" img2="RA3.jpg"/><br/>
            <Acor id="acor11" t1="DURACION" cont1="La Entrada Folklorica Universitaria suele tener una duración de 6 a 8 horas." t2="FRATERNIDADES" cont2="Dependiendo del número de fraternidades participantes y el ritmo de la procesión. Cada fraternidad tiene la oportunidad de mostrar su coreografía completa." t3="PERMITE" cont3="De esta manera el público disfruta de la diversidad de danzas y expresiones culturales." /><br/>
            <Cards img="R1.jpg" alt="ROJ" 
                text="La Entrada Folclórica Universitaria (EFU) de la Universidad Mayor de San Andrés (UMSA) es una explosión de color, música y alegría que llena las calles de La Paz cada año. Más allá de ser un espectáculo visualmente impactante, esta festividad tiene un recorrido cuidadosamente planificado que refleja la riqueza cultural de la ciudad y la universidad."/><br/>

            <Boton ilust="R4.jpg" text="Se estima que participaron alrededor de nueve fraternidades en la primera Entrada Folklorica Universitaria."/>
            <Car id="carrusel12" img0="RA4.jpg" img1="RA5.jpg" img2="RA6.jpg"/><br/>
            <Acor id="acor12" t1="DANZAS" cont1="Las danzas presentadas probablemente incluyeron danzas tradicionales bolivianas representativas de diferentes regiones del país." t2="PÚBLICO" cont2="La Entrada Universitaria atrajo a una gran cantidad de espectadores, tanto estudiantes como ciudadanos de La Paz." t3="IMPACTO" cont3="La primera Entrada Folklorica Universitaria sentó las bases para lo que se convertiría en una de las festividades más importantes de la UMSA y de la ciudad de La Paz." /><br/>
            <Cards img="R3.jpg" alt="RUTA" 
                text="Si bien la ruta exacta de la primera EFU permanece en la memoria de los participantes y en la historia oral de la UMSA, su esencia continúa viva en cada edición de esta colorida y vibrante celebración."/><br/>

            <Boton ilust="R5.jpg" text="La Entrada Folklórica Universitaria de la Universidad Mayor de San Andrés (UMSA) es un evento vibrante y multifacético."/>
            <Car id="carrusel13" img0="RA7.jpg" img1="RA8.jpg" img2="RA9.jpg"/><br/>
            <Acor id="acor13" t1="INICIO" cont1="Avenida Montes: Su amplitud, arboledas y vistas panorámicas de la ciudad la convierten en un escenario ideal para el inicio de la Entrada Folklorica Universitaria." t2="IMPORTANCIA" cont2="Avenida Mariscal Santa Cruz: Su importancia histórica y arquitectónica aportan un toque de solemnidad al recorrido." t3="CONTINUA" cont3="Avenida Camacho: El bullicio comercial y la presencia de público crean un ambiente vibrante y festivo." /><br/>
            <Cards img="R6.jpg" alt="Tobas" 
                text="La Entrada UNIVERSITARIA Engloba diversos aspectos que contribuyen a su importancia cultural y ambiente festivo"/><br/>

            <Boton ilust="R7.jpg" text="La EFU es un evento definitorio para la UMSA, que fomenta un fuerte sentido de comunidad y pertenencia entre sus estudiantes."/>
            <Car id="carrusel14" img0="RA10.jpg" img1="RA11.jpg" img2="RA12.jpg"/><br/>
            <Acor id="acor14" t1="CELEBRACION" cont1="LA ENTRADA FOLKLORICA UNIVERSITARIA sirve como un gran escaparate del rico patrimonio cultural de Bolivia, reuniendo una diversa gama de danzas tradicionales de diferentes regiones del país. " t2="FRATERNIDADES" cont2="Las fraternidades preparan meticulosamente sus presentaciones, representando las costumbres, la música y la vestimenta únicas de las regiones que han elegido." t3="CAUTIVA" cont3="La Entrada Folklorica Universitaria es un festín visual y auditivo que cautiva a los espectadores con sus elaborados trajes, movimientos de baile sincronizados y música alegre." /><br/>
            <Cards img="R8.jpg" alt="PART" 
                text="La participación de numerosas fraternidades, que representan diferentes facultades y disciplinas académicas, refuerza el papel de la universidad como crisol de diversas perspectivas y talentos."/><br/>

            <Boton ilust="R9.jpg" text="La EFU sirve como una herramienta educativa, creando conciencia sobre el diverso patrimonio cultural de Bolivia y fomentando el aprecio por las tradiciones de diferentes regiones."/>
            <Car id="carrusel15" img0="RA13.jpg" img1="RA14.jpg" img2="RA16.jpg"/><br/>
            <Acor id="acor15" t1="GARANTIZA" cont1="El recorrido de la Entrada Universitaria está cuidadosamente planificado para garantizar que las fraternidades tengan el espacio adecuado para sus presentaciones." t2="PUBLICO" cont2="El público pueda disfrutar de una experiencia completa. " t3="RUTA" cont3="La ruta atraviesa algunos de los lugares más emblemáticos de La Paz, permitiendo a los participantes y espectadores sumergirse en la rica cultura e historia de la ciudad." /><br/>
            <Cards img="R10.jpg" alt="INTER" 
                text="También brinda una oportunidad para el intercambio cultural y la interacción entre la comunidad universitaria y el público en general."/><br/>            
            
            
            
        </div>
    )
}
export default Recorrido;