import Image from "next/image";
import Link from "next/link";

export default function Button({texto, blueColor, photoButton}) {
    return (
        <button className={
            `flex flex-row h-14 p-5 justify-center items-center rounded-lg font-semibold 
            ${photoButton? 'w-60 gap-5':'w-52'} 
            ${blueColor? 'bg-blue-button text-white':'bg-gray-button text-black'}`
        }>
            {texto}
            {photoButton && <Image className="mx-auto" src={'/images/camera.png'} width={31} height={27}/>}
        </button>
    )
}