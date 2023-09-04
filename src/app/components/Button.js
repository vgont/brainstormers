import Link from "next/link";

export default function Button({className, texto}){
    return( 
        <button className={`flex flex-col w-52 h-16 p-5 justify-center items-center rounded-lg font-semibold ${className}`}>
            {texto}
        </button>
    )
}