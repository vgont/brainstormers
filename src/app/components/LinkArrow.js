

export default function LinkArrow({texto, href}){
    return(
        <a className = "linkArrowL" href={href}>
            <img src="/images/arrowL.svg" alt="arrow"/>
            {texto}
        </a>
    )
}