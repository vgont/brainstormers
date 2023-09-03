import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import Title from "@/app/components/Title";
import Toggle from "@/app/components/Toggle";

export default function Potencia() {
  return (
    <div>
      <Header />
      <Main>
        <Title texto={'Sua bike é elétrica?'} />
        <div>
          <Toggle/>
        </div>
      </Main>
      <Footer/>
    </div>

  )
}

