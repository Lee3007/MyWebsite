import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 7rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Cantarell', sans-serif;

    background-color: var(--alt1);
    -webkit-box-shadow: 0px 6px 14px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 14px -5px rgba(0,0,0,0.75);
    box-shadow: 0px 6px 14px -5px rgba(0,0,0,0.75);

    div{
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 1rem;
        
        img{
            height: 100%;
            margin: 0;
            padding: 0;
        }

        p{
            margin-left: 0.4rem;
            font-weight: 600;
            font-size: 2.2rem;
            color: var(--background);
            /* text-shadow: 2px 2px 0px rgba(117,120,42,0.5); */
        }
    }
    

    nav{
        
        ul{
            display: flex;
            flex-direction: row;

            li{ 
                list-style-type: none;
                padding-left: 2rem;
                
                :last-child{
                    margin-right: 5rem;
                }

                a{
                    text-align: center;
                    text-decoration: none;
                    color: var(--background);
                    font-weight: 600;
                    font-size: 1.5rem;
                }
        
            }

        }

    }

`;