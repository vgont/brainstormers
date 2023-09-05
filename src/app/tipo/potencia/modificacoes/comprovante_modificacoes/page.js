import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import Title from "@/app/components/Title";

export default function Comprovantes() {
  return (
    <div>
      <Header/>
      <Main>
        <Title texto={'Precisamos dos seguintes comprovantes:'} />
        <Button texto={'Nf da modificação'} photoButton={true}/>
        <Button texto={'Nf do acessório'} photoButton={true}/>
      </Main>
      <Footer link={"/tipo/potencia/modificacoes/comprovantes"} />
    </div>
  )
}
