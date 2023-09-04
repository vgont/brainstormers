import Dropdown from "@/app/components/Dropdown";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";


export default function TempoUso() {
  return (
    <div>
      <Header />
      <Main>
        <Dropdown />
      </Main>
      <Footer link={"/tipo/potencia/tempo_de_uso"} />
    </div>
  )
}
