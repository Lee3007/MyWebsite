import cicloHamilton from "./cicloHamiltPreview.png"
import snake from "./snakePreview.gif"
import magicGolems from "./magicGolemsPreview.png"
import website from "./websitePreview.png"
import tiktaktoe from "./tiktaktoePreview.png"

interface ReposPreview {
    [key: number]: string;
}

const reposPreviews: ReposPreview = {
    397391296: cicloHamilton,
    451478029: snake,
    357295452: magicGolems,
    476319157: website,
    440018773: tiktaktoe
}

export default reposPreviews;

// const allowedIds = [397391296, 451478029, 357295452, 476319157, 440018773];
