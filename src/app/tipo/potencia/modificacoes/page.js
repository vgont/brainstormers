import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import Title from "@/app/components/Title";
import Toggle from "@/app/components/Toggle";


export default function Modificacoes() {
  return (
    <div>
      <Header />
      <Main>
        <Title texto={'Sua bike possui modificações?'}/>
        <Toggle/>
        <Title texto={'Sua bike possui acessórios?'}/>
        <Toggle/>
      </Main>
      <Footer link={"/tipo/potencia/modificacoes/comprovantes"} />
    </div>
  )
}
