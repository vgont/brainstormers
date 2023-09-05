import Image from "next/image";

export default function PhotoInput({ texto }) {
    return (
        <div>
            <input className={`flex flex-row h-14 p-5 justify-center items-center rounded-lg font-semibold w-60 gap-5 bg-gray-button text-black invisib`} type="file"
            />
        </div>
    )
}