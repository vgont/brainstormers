import LinkArrow from "./LinkArrow";
import LogoBrain from "./LogoBrain";

export default function Header(){
    return(
        <header className="header">
            <LinkArrow href={"http://localhost:3000"} texto={'HOME'}/>
            <LogoBrain/>
        </header>
    )
}