import Header from "../components/Header";
import TipoBike from "../components/TipoBike";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Tipo() {
  return (
    <div>
      <Header />
      <Main>
        <div className="flex items-center justify-center flex-col w-11/12 gap-12">
          <Title texto={'Qual o tipo da sua bike?'} />
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
      </Main>
      <Footer hideArrowBack={true} link={"/tipo/potencia"} />
    </div>
  )
}
