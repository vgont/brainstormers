import Button from "./components/Button";
import Header from "./components/Header";
import Title from "./components/Title";

export default function Home() {
  return (
    <main className="main">
      <header className="header">
        <img className="icon " src="../images/LOGOTIPO.svg" alt="logo"/>
      </header>
      <img className="porto" src="/images/porto.png" alt="porto"/>
      <Title className={'title'}texto={'SEJA BEM VINDO !'}/> 
      <div className="divButton">
        <Button className={'grayButton'} texto={'VER MINHAS BIKES'}/>
        <Button className={'blueButton'} href={"http://localhost:3000/tipo"} texto={'CADASTRE SUA BIKE'}/>
      </div>
    </main>
  )
}
