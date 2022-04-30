import styled from 'styled-components'

export const Container = styled.section`
    padding-top: 1rem;
    width: 100%;
    height: 14rem;
    text-align: center;
    color: var(--background2);
    font-family: 'Cantarell',sans-serif;

    background-color: var(--background3);

    display: flex;
    flex-direction: column;
    align-items: center;

    div.wrapper{
        width: 80rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        a{
            text-decoration: none;
            color: var(--background2);
            width: auto;
            height: 2rem;
            text-align: left;
        }

        div{
            margin-top: 2rem;
            width: 80rem;
            
            h2{
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
            }

            p{
                font-size: 1rem;
                font-style: italic;
                font-weight: 100;
            }

        }

    }

    @media (max-width: 990px) {

        div.wrapper{
            width: 100%;

            div{
                width: 100%;

                h2{
                    width: 100%;
                }

                p{
                    width: 100%;
                }
            }

        }

    }

`;