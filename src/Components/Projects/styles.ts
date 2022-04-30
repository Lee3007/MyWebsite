import styled from 'styled-components'

export const Waves = styled.svg`
    z-index: -1;
    width: 100%;
    background-color: var(--background);
`;

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -5rem;

    text-align: center;
    font-family: 'Cantarell', sans-serif;

    div.sectionTitle{
        width: 80rem;

        h1{ 
            color: var(--alt1);
            font-size: 3rem;
            font-weight: 600;
            margin-bottom: 4rem;

        }

    }

`;

export const RepositoryList = styled.ul`
    
`;