import Link from "next/link";
import LinkHome from "./LinkHome";
import Image from "next/image";

export default function Header(){
    return(
        <header className="w-full h-20 bg-hf-blue flex flex-row items-center p-3">
            
            <LinkHome link={'/'} texto={'HOME'}/>
            
            <Image 
            src={"/images/logoBrain.svg"} width='60' height={'60'}     
            />
        </header>
    )
}