import Link from "next/link";
import Button from "./components/Button";
import Title from "./components/Title";
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header hideHomeButton/>
      <Image className="mt-24 mb-32" src={'/images/porto.png'} width={'284'} height={'134'}/>
      <h2 className='text-lg font-Roboto font-bold'>Seja bem vindo!</h2>
      <div className="mt-32 w-11/12 flex justify-evenly flex-wrap max-w-mw gap-7">
        <Button className={'bg-gray-button text-black'} texto={'Ver minhas bikes'}/>
        <Link href={"/tipo"}>
          <Button className={'bg-blue-button text-white'} texto={'Cadastre sua bike'}/>
        </Link>
      </div>
    </main>
  )
}


