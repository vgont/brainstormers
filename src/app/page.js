import Link from "next/link";
import Button from "./components/Button";
import Image from "next/image";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div>
      <Header hideHomeButton />
      <Main>
        <Image className="mb-10" src={'/images/porto.png'} width={'284'} height={'134'} />
        <h2 className='text-lg font-Roboto font-bold'>Seja bem vindo!</h2>
        <div className="mt-24 w-11/12 flex justify-evenly flex-wrap max-w-mw gap-7">
          <Link href={"/tipo"}>
            <Button blueColor={true} texto={'Cadastre sua bike'} />
          </Link>
          <Button  texto={'Ver minhas bikes'} />
        </div>
      </Main>
    </div>


  )
}


