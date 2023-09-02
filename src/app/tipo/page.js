import Header from "../components/Header";
import TipoBike from "../components/TipoBike";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function Tipo() {
  return (
    <main className="flex flex-col items-center">
        <Header/>
        <Title texto={'Qual o tipo da sua bike?'}/>

        <div className="mt-20 mb-20 flex items-center justify-center flex-col w-11/12 gap-12">
            <TipoBike 
            tipo={'Performance'}  
             />
            <TipoBike 
            tipo={'Mountain Bike'} 
            />
            <TipoBike 
            tipo={'Urbana'} 
            />
            
        </div>
        <Footer hideArrowBack={true}  link={"/tipo/potencia"}/>
    </main>
  )
}
 