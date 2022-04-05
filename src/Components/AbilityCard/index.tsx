import { Container } from "./styles";

export function AbilityCard(){
    return(
        <Container>
            <div className="cardWrapper">
                <div className="section">
                    <div className="iconWrapper">
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                    </div>
                    <h1>Academic</h1>
                    <p>I'm currently studying <strong>Computer Engineering</strong> at Federal Tecnological University of Paraná (Brazil), aka UTFPR.</p> 
                    <p>There I created a solid foundation in <strong>mathematics, physics and logic</strong>, and still am developing some project management skills.</p>
                    
                </div>
                <div className='verticalDivider'></div>
                <div className="section">
                    <div className="iconWrapper">
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <h1>Professional</h1>
                    <p>I am currently working in a <strong>research, extension and teaching group</strong> inside university called PETECO, in which I developed a game to teach children about Computer Thinking, a Python mini-course, and others!</p>
                    <p>Still quite inexperienced, though I wish to land an <strong>internship</strong>, or start working as a <strong>Junior developer</strong> as soon as possible.</p>
                </div>
                <div className='verticalDivider'></div>
                <div className="section">
                    <div className="iconWrapper">
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <h1>Personal</h1>
                    <p>I consider myself an <strong>avid learner</strong> who's always trying his best to achieve the set goals. I'm easily able to work in a team or alone, to propose creative solutions and to follow orders.</p>
                    <p>Moreover, my dream is to live in Canada and work as a Full-Stack Developer (or even a Back-End Dev).</p>
                </div>
            </div>
        </Container>

    );

}