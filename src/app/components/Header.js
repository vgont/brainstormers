export default function Header({href, img}){
    return(
        <header className={"header"}>
            <a href={href}></a> <img className="icon " src={img} alt="logo"/>
        </header>
    )
}