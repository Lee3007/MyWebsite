import { Container } from "./styles";

interface ContactItemProps {
    name: string;
    link: string;
    icon: string;
}

export function ContactItem( props:ContactItemProps ){

    return (
        <Container>

            <a href={props.link} target="_blank">
                <img src={props.icon}/>
                <h2>{props.name}</h2>
            </a>

        </Container>
    );
}