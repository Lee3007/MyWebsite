import styled from 'styled-components'

export const Wave = styled.svg`
    min-width: 100%;
    background-color: var(--background-color);
    fill: var(--background-color);
    margin-bottom: 5rem;
`

export const Container = styled.section`
    /* height: 40rem; */
    background-color: var(--alt1);
    /* height: 19rem; */
    /* background-color: blue; */
    text-align: center;
    font-family: 'Cantarell', sans-serif;
    color: var(--background);

    h4{
        position: absolute;
        height: 0px;
        width: 0px;
        /* display: none; */
        margin-top: -35rem;
    }

    div{
        width: 100%;
        height: 30rem;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        margin-top: -10rem;

        h1{
            font-size: 3rem;
            font-weight: 600;
            margin-bottom: 2rem;
        }

        p{
            width: 86%;
            font-size: 1.4rem;
            font-weight: 100;

            a{
                text-decoration: none;
                color: inherit;
            }
        }

    }


`