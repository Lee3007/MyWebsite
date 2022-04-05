import { Container, Wave } from "./styles";

export function About(){
    return(
        <Container >

            <Wave width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg"><path d="M 0,400 C 0,400 0,200 0,200 C 208,222.13333333333333 416,244.26666666666665 554,245 C 692,245.73333333333335 760,225.0666666666667 896,214 C 1032,202.9333333333333 1236,201.46666666666664 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#2d2d2a" transform="rotate(-180 720 200)"></path></Wave>

            <div>
                <h1>About</h1>
                <p>My journey started around a year ago, when I decided to study Web Development. I haven't worked for a company yet... but I surely do have some projects you can check out on my <a href="https://github.com/Lee3007">GitHub page!</a></p>
            </div>

            <h4 id="aboutScrollPoint"></h4>

        </Container>

    );


}