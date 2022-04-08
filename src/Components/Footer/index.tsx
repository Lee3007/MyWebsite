import { useEffect, useState } from "react";
import { Container } from "./styles";

interface QuoteStructure{
    anime: string;
    character: string;
    quote: string;
}

export function Footer(){

    const [quote, setQuote] = useState<QuoteStructure>( {anime: '', character: '', quote: ''} );

    useEffect( () => {
        fetch("https://animechan.vercel.app/api/random")
            .then( response=> response.json() )
            .then( data => setQuote(data) );
    }    
    ,[]);


    return(
        <Container>
            <div className="wrapper">

                <a href="https://github.com/Lee3007">© 2022. Designed and Built by Felipe A. Lee (aka: r3solv).</a>

                <div>
                    <h2>Random Anime Quote</h2>
                    <p className="quoteText">"{quote.quote}"</p>
                    <p className='quoteInfo'>{quote.anime} - {quote.character}.</p>
                </div>

            </div>
        </Container>

    );
}