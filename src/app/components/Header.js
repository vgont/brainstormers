import LinkArrow from "./LinkArrow";
import Image from "next/image";

export default function Header({hideHomeButton}){
    return(
        <header className="w-full h-20 bg-hf-blue flex flex-row items-center p-3">
            {
            !hideHomeButton && <LinkArrow left={true} link={'/'} texto={'HOME'}/>
            }

            <div className="ml-auto">
            <Image 
            src={"/images/BikeHeader.svg"} width='60' height={'60'}/>
            </div>

        </header>
    )
}