import LinkArrow from "./LinkArrow";

export default function Footer({className}){
    return(
        <div className="footer">
            <LinkArrow href={''} texto={'VOLTAR'}/>
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