import Image from "next/image"
import Link from "next/link"

export default function LinkHome({link, texto}){
    return(
            <Link href={`${link}`} className="flex items-center gap-2.5 text-white mr-auto">
                
                <Image src={'/images/arrowL.svg'} width={'28'} height={'28'}/>
                {texto}
            </Link>
    )
}
