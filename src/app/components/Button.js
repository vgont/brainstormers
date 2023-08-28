export default function Button({className, href, texto}){
    return(
        <button className={className}><a href={href}>{texto}</a></button>
    )
}