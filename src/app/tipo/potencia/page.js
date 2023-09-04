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
        <div className="flex flex-col items-center">
          <Toggle onToggle={setTextIsShown}/>
          {!textIsShown && <div><Input/></div>}
        </div>
      </Main>
      <Footer/>
    </div>

  )
}

