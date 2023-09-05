import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import PhotoInput from "@/app/components/PhotoInput";
import Title from "@/app/components/Title";

export default function Comprovantes() {
  return (
    <div>
      <Header/>
      <Main>
        <Title texto={'Precisamos dos seguintes comprovantes:'} />
        <PhotoInput texto={'Nf da modificacao'}/>
      </Main>
      <Footer link={"/tipo/potencia/modificacoes/comprovantes"} />
    </div>
  )
}
