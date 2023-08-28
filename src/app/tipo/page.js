import Footer from "../components/Footer";
import Header from "../components/Header";
import TipoBike from "../components/TipoBike";
import Title from "../components/Title";

export default function Tipo() {
  return (
    <main className="main">
        <Header/>
        <Title className="title mt-[82px]" texto={'QUAL O TIPO DA SUA BIKE?'}/>
        <div className="divBikes">
            <TipoBike 
            tipo={'PERFORMANCE'} 
            img={'/images/bikeP.svg'} 
            texto={'Para competições esportivas, em estradas pavimentadas, como ciclismo.'}
             />
            <TipoBike 
            tipo={'MOUNTAIN BIKE'} 
            img={'/images/bikeM.svg'} 
            texto={'Para trilhas off-road e terrenos acidentados.'}
            />
            <TipoBike 
            tipo={'URBANA'} 
            img={'/images/bikeU.svg'} 
            texto={'Confortável, de uso urbano e para o dia a dia.'}
            />
        </div>
        <div className="footer">
        <a className = "linkArrowR" href={''}>
                AVANÇAR
            <img 
                src="/images/arrowR.svg" 
                alt="arrow"
            />
            </a>
        </div>
    </main>
  )
}
 