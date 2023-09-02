import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Title from "@/app/components/Title";
import Toggle from "@/app/components/Toggle";

export default function Potencia() {
    return (
      <main className="flex flex-col items-center">
        <Header/>
          <Title texto={'Sua bike é elétrica?'}/>
          <div>
            <Toggle/>
          </div>
        <Footer/>
      </main>
    )
  }