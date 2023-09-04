import Button from "./Button";

export default function BikeType({tipo, texto}){
    return(
        <div className="flex flex-col items-center">
        <Button texto={tipo} className={'bg-gray-button text-black'}/>                        
        <p className="descBike">{texto}</p>
        </div>
    )
}