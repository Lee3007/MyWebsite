import styled from 'styled-components'

export const Container = styled.div`
    /* height: 88.5vh; */
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Cantarell', sans-serif;
    color: var(--alt1);


    section{
        height: 100%;
        width: 80rem;
        text-align: center;

        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }

        h1{
            font-size: 3.5rem;
            overflow: hidden;
            white-space: nowrap;
            margin: 0 auto;
            margin-top: 5rem;

            animation: 
                typing 2s steps(100, end);
        }

        h2{
            font-size: 1.5rem;
            font-weight: 100;
            overflow: hidden;
            white-space: nowrap;
            margin: 0 auto;
            margin-top: 1rem;

            animation: 
                typing 4s steps(100, end);

            animation-delay: 1.5s;
            animation-fill-mode: backwards;
        }

        img{
            margin-top: 4rem;
            width: 30rem;
            border-radius: 50%;
        }

    }

`;