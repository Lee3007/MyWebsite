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
        --background2: #3D3D3D;
        --background3: #1F1F1E;
        --alt1: #F0F757;
        --alt2: #F7FFF7;


        /* --background: #44344F;
        --background2: #564D80;
        --alt1: #C2F970;
        --alt2: #D3FCD5; */
        
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

        @media (min-width: 3440px){
            font-size: 131.25%;
        }
        @media (min-width: 2560px) and (max-width: 3439px){
            font-size: 118.75%;
        }
        @media (min-width: 2048px) and (max-width: 2559px){
            font-size: 106.25%;
        }
        @media (min-width: 1920px) and (max-width: 2047px){
            font-size: 100%;
        }
        @media (min-width: 1600px) and (max-width: 1919px){
            font-size: 87%;
        }
        @media (min-width: 1366px) and (max-width: 1599px){
            font-size: 80%;
        }
        @media (min-width: 1280px) and (max-width: 1365px){
            font-size: 70%;
        }
        @media (min-width: 1024px) and (max-width: 1279px){
            font-size: 66%;
        }
        @media (min-width: 800px) and (max-width: 1023px){
            font-size: 60%;
        }
        @media (min-width: 550px) and (max-width: 799px){
            font-size: 50%;
            ::-webkit-scrollbar{
                width: 0;
            }
        }
        @media (min-width: 430px) and (max-width: 549px){
            font-size: 42%;
            ::-webkit-scrollbar{
                width: 0;
            }
        }
        @media (min-width: 250px) and (max-width: 429px){
            font-size: 35%;
            ::-webkit-scrollbar{
                width: 0;
            }
        }
        @media (max-width: 249px){
            font-size: 30%;
            ::-webkit-scrollbar{
                width: 0;
            }
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