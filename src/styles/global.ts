import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar{
        width: 0.6rem;
    }

    ::-webkit-scrollbar-track{
        background: var(--background);
    }

    ::-webkit-scrollbar-thumb{
        border-radius: 0rem;
        background-color: var(--alt1);
        box-shadow: inset 0 0 3px var(--background);
    }

    :root {
        --background: #2d2d2a;
        --background2: #4C4C47;
        --alt1: #F0F757;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: default;
    }

    body{
        -webkit-font-smoothing: antialiased;

    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.50%;
        }

    }    

    body {
        background-color: var(--background);
    }

    button{
        cursor: pointer;
    }

    a{
        cursor: pointer;
    }
`