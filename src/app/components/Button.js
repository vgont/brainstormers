import Link from "next/link";

export default function Button({texto, blueColor }) {
    return (
        <button className={`flex flex-col w-52 h-16 p-5 justify-center items-center rounded-lg font-semibold 
        ${!blueColor? 'bg-gray-button text-black': 'bg-blue-button text-white'}`}>
            {texto}
        </button>
    )
}