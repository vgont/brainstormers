import Image from "next/image"
import Link from "next/link"


export default function LinkArrow({ link, texto, left }) {
    if (left) {
        return (
            <Link href={`${link}`} className="flex items-center gap-2.5 text-white">
                <Image src={'/images/arrowL.svg'} width={28} height={28}/>
                {texto}
            </Link>
        )
    }
    return (
        <Link href={`${link}`} className="flex items-center gap-2.5 ml-auto text-white">
            {texto}
            <Image src={'/images/arrowR.svg'} width={28} height={28}/>
        </Link>
    )
}