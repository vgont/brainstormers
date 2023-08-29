import Image from "next/image";
import Link from "next/link";

export default function FooterAvancar({link}){
    return(
        <footer className="footer">
            <Link className="linkArrowR" href={link}>
                AVANÇAR
                <Image src={'/images/arrowR.svg'} width={'28'} height={'28'}/>
            </Link>
                
            
        </footer>
    )
}