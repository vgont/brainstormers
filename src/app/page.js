import Button from "./components/Button";
import Header from "./components/Header";
import Title from "./components/Title";

export default function Home() {
  return (
    <main className="main">
      <Header className={'header'} img={"../images/LOGOTIPO.svg"}/>
      <img className="porto" src="/images/porto.png" alt="porto"/>
      <Title texto={'SEJA BEM VINDO !'}/> 
      <div className="divButton">
        <Button className={'grayButton'} link={'VER MINHAS BIKES'}/>
        <Button className={'blueButton'} link={'CADASTRE SUA BIKE'}/>
      </div>
    </main>
  )
}
