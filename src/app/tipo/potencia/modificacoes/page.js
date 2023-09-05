"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import Title from "@/app/components/Title";
import Toggle from "@/app/components/Toggle";
import { useState } from "react";


export default function Modificacoes() {
  
  const [modificacoes, setModificacoes] = useState(false);
  const [acessorios, setAcessorios] = useState(false);

  return (
    <div>
      <Header/>
      <Main>
        <Title texto={'Sua bike possui modificações?'} />
        <Toggle onToggle={setModificacoes}/>
        <Title texto={'Sua bike possui acessórios?'}/>
        <Toggle onToggle={setAcessorios}/>
      </Main>
      <Footer link={
        modificacoes || acessorios? "/tipo/potencia/modificacoes/comprovante_modificacoes":"/tipo/potencia/modificacoes/comprovantes"
      }/>
    </div>
  )
}
