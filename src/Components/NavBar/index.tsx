import { Container} from "./styles";
import logoImg from '../../assets/avatarSmiling.png'

// function scrollToAbout(){

//   document.getElementById('asdf').scrollIntoView({
//     behavior: "smooth",
//   });

// }

export function NavBar(){
    return (
        <Container>
            <div>
                <img src={logoImg} alt="logo"></img>
                <p>Felipe A. Lee</p>
            </div>
            <nav>
                <ul>

                    <li><a
                        onClick={ ()=>{ 
                            const about = document.getElementById('aboutScrollPoint');
                            if( about ){
                                about.scrollIntoView({behavior: "smooth"});
                            }
                        } }
                    >About</a></li>

                    <li><a
                        onClick={ ()=>{ 
                            const projects = document.getElementById('projectsScrollPoint');
                            if( projects ){
                                projects.scrollIntoView({behavior: "smooth"});
                            }
                        } }
                    >Projects</a></li>

                    <li><a
                        onClick={ ()=>{ 
                            const contact = document.getElementById('contactScrollPoint');
                            if( contact ){
                                contact.scrollIntoView({behavior: "smooth"});
                            }
                        } }
                    >Contact</a></li>

                    <li><a href="https://resume.io/r/V3oq5FIYs">Resume</a></li>
                </ul>            
            </nav>        
        </Container>
        
        
    );
}