import { Container } from "./stytles";
import { ContactItem } from "../ContactItem";
import iconsSVG from "../../assets/icons/index"

export function Contact(){        

    return (
        <Container>
                <h1 className="contactSectionTitle">Say Hello!</h1>

                <ul>
                    <ContactItem name="Linkedin" link="https://www.linkedin.com/in/felipelee30/" icon={iconsSVG["linkedinSVG"]} />
                    <ContactItem name="GitHub" link="https://github.com/Lee3007" icon={iconsSVG["githubSVG"]} />
                    <ContactItem name="Resume" link="https://resume.io/r/V3oq5FIYs" icon={iconsSVG["resumeSVG"]} />
                    <ContactItem name="Email" link="mailto:felipe.lee30@gmail.com" icon={iconsSVG["mailSVG"]} />
                    <ContactItem name="Location" link="https://www.google.com.br/maps/place/Batel,+Curitiba+-+PR/@-25.4415325,-49.288887,16.04z/data=!4m5!3m4!1s0x94dce388fe111323:0x59abf083edb128f1!8m2!3d-25.4432789!4d-49.2849756" icon={iconsSVG["locationSVG"]} />
                </ul>
                
        </Container>
    );
}