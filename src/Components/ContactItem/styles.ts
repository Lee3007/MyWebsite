import styled from 'styled-components'

export const Container = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-right: 1rem;
    margin-left: 1rem;

    /* background-color: blue; */
    a{
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        z-index: 1;

        img{ 
        height: 4rem;
        margin-right: 0.6rem;
        z-index: 2;
        cursor: pointer;

        }

        h2{
            font-family: 'Cantarell',sans-serif;
            color: var(--alt1);
            z-index: 2;
            cursor: pointer;

        }

    }


`;