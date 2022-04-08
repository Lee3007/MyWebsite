import resumeSVG from "./file.svg"
import mailSVG from "./envelope.svg"
import githubSVG from "./github-fill.svg"
import linkedinSVG from "./linkedin-fill.svg"
import locationSVG from "./map.svg"

interface ContactIcons {
    [key: string]: string;
}

const iconsSVG: ContactIcons = {
    "resumeSVG": resumeSVG,
    "mailSVG": mailSVG,
    "githubSVG": githubSVG,
    "linkedinSVG": linkedinSVG,
    "locationSVG": locationSVG
}

export default iconsSVG;