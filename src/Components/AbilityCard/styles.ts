import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 55vh;
    background-color: var(--alt1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -12rem;
    color: var(--alt1);
    font-family: 'Cantarell', sans-serif;
    font-weight: 200;

    .cardWrapper{
        width: 80rem;
        height: 55vh;
        background-color: var(--background);
        border-radius: 1rem;
    
        display: flex;
        flex-direction: row;
        align-items: center;

        -webkit-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
        box-shadow: 6px 6px 14px -2px rgba(0,0,0,0.75);

        .section {
            height: 100%;
            width: 30rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;

            text-align: center;
            margin: 1rem;
            margin-top: -6rem;

            .iconWrapper {
                /* position: absolute; */
                /* margin-top: -9rem; */
                display: flex;
                align-items: center;
                justify-content: center;
                border: 4px solid var(--alt1);

                background-color: var(--background);
                border-radius: 50%;
                min-width: 6rem;
                min-height: 6rem;
                margin-bottom: 2rem;

                -webkit-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
                -moz-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
                box-shadow: 6px 6px 14px -2px rgba(0,0,0,0.75);

                .icon{
                    width: 3.5rem;
                }
            }

            h1{
                margin-bottom: 0.5rem;
                font-size: 2rem;
            }
            
            p{
                overflow: hidden;
                font-size: 1.4rem;
                line-height: 2.2rem;

                strong{
                    font-weight: 600;
                }
            }            
            
        }

        .verticalDivider{
            border-radius: 1px;
            height: 80%;
            width: 1px;
            background-color: var(--background2);
        }

    }

`;