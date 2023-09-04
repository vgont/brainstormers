"use client";
import Dropdown from "@/app/components/Dropdown";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Input from "@/app/components/Input";
import Main from "@/app/components/Main";
import Title from "@/app/components/Title";
import Toggle from "@/app/components/Toggle";
import { useState } from "react";

export default function Potencia() {
  const [textIsShown, setTextIsShown] = useState(true)
  return (
    <div>
      <Header />
      <Main>
        <Title texto={'Sua bike é elétrica?'} />
        <div className="flex flex-col items-center gap-10">
          <Toggle onToggle={setTextIsShown} />
          {!textIsShown &&
            <div>
              <Input texto={'Watts'} submitValue={'Verificar Potência'} pHolder={'ex: 250'} valueLimit={'Atenção: Só aceitamos bikes elétricas de até 250W'}/>
            </div>}
        </div>
      </Main>
      <Footer link={'/tipo/potencia'}/>
    </div>

  )
}

