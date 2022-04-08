import { ReposContainer } from "./styles";
import reposPreviews from "../../assets/reposPreview";
import { useEffect, useState } from "react";

export interface RepositoryItemProps{
    repository: {
        id: number;
        name: string;
        description: string;
        html_url: string;
    }
}

interface Tools {
    [key: string]: string;
}

export function RepositoryItem( props: RepositoryItemProps ){

    const [tools, setTools] = useState<Tools>({});

    useEffect( ()=>{
        const url = "https://api.github.com/repos/Lee3007/" + props.repository.name + "/languages";
        fetch(url)
            .then( response=> response.json() )
            .then( data => {setTools(data); })

    }, []);

    const toolsString = Object.keys(tools);
    
    
    return (
        <ReposContainer>
            
            <a href={props.repository.html_url} target="_blank">{props.repository.name}</a>
            <img src={reposPreviews[props.repository.id]}/>
            <p>{props.repository.description}</p>
            <div className="tools"> <b>Tools used:</b> {toolsString.join(', ')}.</div>
            <div className="toolsIcons"></div>

        </ReposContainer>


    )

}