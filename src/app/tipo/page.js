import Image from "next/image";
import Footer from "../components/Footer";
import FooterAvancar from "../components/FooterAvancar";
import Header from "../components/Header";
import TipoBike from "../components/TipoBike";
import Title from "../components/Title";
import Link from "next/link";

export default function Tipo() {
  return (
    <main className="flex flex-col items-center">
        <Header/>
        <Title className="text-lg font-bold mt-20 mt-[82px]" texto={'QUAL O TIPO DA SUA BIKE?'}/>

        <div className="mt-20 mb-20 flex items-center justify-center flex-col w-11/12 gap-12">
            <TipoBike 
            tipo={'PERFORMANCE'} 
            img={<Image src={'/images/bikeP.svg'} width={'36'} height={'36'}/>} 
            texto={'Para competições esportivas, em estradas pavimentadas, como ciclismo.'}
             />

            <TipoBike 
            tipo={'MOUNTAIN BIKE'} 
            img={<Image src={'/images/bikeM.svg'} width={'36'} height={'36'}/>} 
            texto={'Para trilhas off-road e terrenos acidentados.'}
            />

            <TipoBike 
            tipo={'URBANA'} 
            img={
              <Image src={'/images/bikeU.svg'} width={'36'} height={'36'}/>
            } 
            texto={'Confortável, de uso urbano e para o dia a dia.'}
            />
            
        </div>
        <FooterAvancar link={"/tipo/potencia"}/>
    </main>
  )
}
 