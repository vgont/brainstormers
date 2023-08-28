import Button from "./Button";

export default function TipoBike({tipo, img, texto}){
    return(
        <div className="flex flex-col items-center">
            <button className="grayButton">
            <a className="flex flex-col items-center" href="localhost:3000/tipo/potencia">
                {tipo}
                <img className="w-[37px]" src={img} alt="bike" />
            </a>
            </button>
        <p className="descBike">{texto}</p>
        </div>
    )
}