import LinkHome from "./LinkHome";

export default function Footer(){
    return(
        <div className="footer">
            <LinkHome link={"/tipo"} texto={'VOLTAR'}/>
            <a className = "linkArrowR" href={''}>
                AVANÇAR
            <img 
                src="/images/arrowR.svg" 
                alt="arrow"
            />
            </a>
        </div>
    )
}