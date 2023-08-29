import Link from "next/link";
import Button from "./components/Button";
import Title from "./components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <header className="w-full h-20 bg-hf-blue flex flex-row items-center p-3">
        <Image className="ml-auto" src={"/images/logoBrain.svg"} width={'60'} height={'60'}/>
      </header>

      <Image className="mt-24 mb-32" src={'/images/porto.png'} width={'284'} height={'134'}/>
      <Title className={'text-lg font-Roboto font-bold'}
      texto={'Seja bem vindo!'}/> 

      <div className="mt-32 w-11/12 flex justify-evenly flex-wrap max-w-mw gap-7">
        <Button className={'flex flex-col h-16 p-5 justify-center items-center rounded-3xl font-semibold bg-gray-button text-black'} texto={'Ver minhas bikes'}/>
        <Link href="/tipo">
          <Button className={'flex flex-col h-16 p-5 justify-center items-center rounded-3xl font-semibold bg-blue-button text-white'} texto={'Cadastre sua bike'}/>
        </Link>
      </div>
    </main>
  )
}


