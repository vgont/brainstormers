import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Main from "../components/Main";
import BikeType from "../components/BikeType";

export default function Tipo() {
  return (
    <div>
      <Header />
      <Main>
        <div className="flex items-center justify-center flex-col w-11/12 gap-12">
          <Title texto={'Qual o tipo da sua bike?'} />
          <BikeType
            tipo={'Performance'}
          />
          <BikeType
            tipo={'Mountain Bike'}
          />
          <BikeType
            tipo={'Urbana'}
          />
        </div>
      </Main>
      <Footer hideArrowBack={true} link={"/tipo/potencia"} />
    </div>
  )
}
