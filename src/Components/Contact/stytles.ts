import styled from 'styled-components'

export const Container = styled.section`
    margin: auto;
    max-width: 80rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1.contactSectionTitle{
        font-weight: 600;
        font-size: 3rem;
        text-align: center;
        font-family: 'Cantarell',sans-serif;
        color: var(--alt1);

        margin-top: 12rem;
        margin-bottom: 6rem;
    }

    ul{
        width: 100%;
        height: 10rem;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        background-color: var(--background2);
        border-radius: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }


    margin-bottom: 10rem; //temporary
`;