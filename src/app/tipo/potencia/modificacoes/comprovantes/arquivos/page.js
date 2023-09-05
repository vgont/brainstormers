import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import Title from "@/app/components/Title";
import Image from "next/image";

export default function Comprovantes() {
  return (
    <div>
      <Main>
        <Header />
        <Title texto={'Precisamos dos seguintes comprovantes:'} />
        <h3>Vídeos da bike</h3>
        <Button texto={'Vídeo 360'} photoButton={true} />
        <Button texto={'Vídeo em movimento'} photoButton={true} />
      </Main>
      <Footer link={"/tipo/potencia/modificacoes/comprovantes/arquivos"} />
    </div>
  )
}
