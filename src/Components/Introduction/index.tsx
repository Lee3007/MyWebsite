import { Container } from "./styles";
import profPic2 from '../../assets/LeePicture2.jpg'

export function Introduction(){

    return (
        <Container>
            
            <section>
                <h1>A Future Full Stack Developer!</h1>
                <h2>I'm an ambitious university student developing my career.</h2>
                <img src={profPic2}></img>
            </section>
            
        </Container>
    );


}