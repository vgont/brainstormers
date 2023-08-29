import Link from "next/link";

export default function Button({className, texto}){
    return(
        <button className={className}>
            {texto}
        </button>
    )
}