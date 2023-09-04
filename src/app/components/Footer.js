import LinkArrow from "./LinkArrow";

export default function Footer({hideArrowBack,link}){
    return(
        <div className="w-full h-20 bg-hf-blue flex flex-row items-center p-3 justify-between fixed bottom-0">
            {
                !hideArrowBack && <LinkArrow left={true} link={"./"} texto={'VOLTAR'}/>
            }
            <LinkArrow link={link} texto={'AVANÇAR'}/>
        </div>
    )
}