import Button from "./Button";

export default function TipoBike({tipo, texto}){
    return(
        <div className="flex flex-col items-center">
            <button className="flex flex-col h-16 p-5 justify-center items-center rounded-3xl font-semibold bg-gray-button text-black w-44">     
                {tipo}   
            </button>
        <p className="descBike">{texto}</p>
        </div>
    )
}