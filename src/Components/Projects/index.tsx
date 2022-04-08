import { useState, useEffect } from 'react'
import { RepositoryItem } from "../RepositoryItem";
import { Container, RepositoryList, Waves } from "./styles";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

const allowedIds = [451478029, 357295452, 476319157, 440018773, 397391296];

export function Projects(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect( () => {
        fetch('https://api.github.com/users/Lee3007/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
        }, []);

    return (
        <>
            <Waves id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" ><path d="M 0,400 C 0,400 0,200 0,200 C 96.96428571428572,196.57142857142856 193.92857142857144,193.14285714285714 307,185 C 420.07142857142856,176.85714285714286 549.2500000000001,163.99999999999997 697,186 C 844.7499999999999,208.00000000000003 1011.0714285714287,264.85714285714283 1138,273 C 1264.9285714285713,281.14285714285717 1352.4642857142858,240.57142857142858 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f0f757ff"  transform="rotate(-180 720 200)"></path></Waves>
            
            <Container>
                <div className='sectionTitle'>
                    <h1>Some Things I've Built</h1>
                </div>

                <RepositoryList>
                    { 
                        repositories.map( repository => {
                            if(allowedIds.includes(repository.id)){
                                return <RepositoryItem key={repository.id} repository={repository}/>;
                            }
                        }) 
                    }


                </RepositoryList>

            </Container>
        </>
    );
}