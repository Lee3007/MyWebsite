import styled from 'styled-components'

export const ReposContainer = styled.div`
    height: 29rem;
    width: 80rem;
    background-color: var(--background2);
    padding: 2rem;
    border-radius: 1rem;
    text-align: left;

    -webkit-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
    box-shadow: 6px 6px 14px -10px rgba(0,0,0,0.75);

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 3rem;
    
    & + div{
        margin-top: 4rem;
    }

    img{
        grid-area: 1 / 1 / 5 / 4;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        /* border: 2px solid var(--alt2); */
    }

    a{
        text-decoration: none;
        grid-area: 1 / 4 / 2 / 9;

        font-weight: bold;
        font-family: 'Cantarell',sans-serif;
        /* font-size: 2.5rem; */
        font-size: 2rem;
        color: var(--alt2);
    }

    p{
        /* margin-top: -1.8rem; */
        margin-top: -2.2rem;
        grid-area: 2 / 4 / 4 / 9;
        color: var(--alt2);
        /* font-size: 1.5rem; */
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    div.tools{
        grid-area: 4 / 4 / 5 / 9;
        color: var(--alt2);
        /* font-size: 1.2rem; */
        font-size: 1rem;
        display: flex;
        align-items: flex-end;
        padding-bottom: 0.2rem;

        b{
            padding-right: 0.8rem;
        }
    }

`