import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import Title from "@/app/components/Title";
import Image from "next/image";

export default function Comprovantes() {
  return (
    <div>
      <Header/>
      <Main>
        <Title texto={'Precisamos dos seguintes comprovantes:'} />
        <div className="flex flex-col justify-center items-center gap-20">
          <div className="flex flex-col gap-10">
            <h3>Foto da NF e do número de série</h3>
            <Button texto={'Anexar nota fiscal'} photoButton={true}/>
            <Button texto={'Anexar núm. série'} photoButton={true}/>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="mb-10">Você poderá encontrar o número de série nesses lugares:</h3>
            <Image src={'/images/numBike.jpg'} width={300} height={150} />
          </div>
        </div>
      </Main>
      <Footer link={"/tipo/potencia/modificacoes/comprovantes"} />
    </div>
  )
}
