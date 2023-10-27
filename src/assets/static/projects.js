import reactIcon from '../icons/react.svg'
import sassIcon from '../icons/sass.svg'
import euroMoedaImg from '../images/euro-moeda.png'
import ghostImg from '../onFail/img-backup.svg'

const react = {
    img: reactIcon,
    alt: 'React Icon'
}
const sass = {
    img: sassIcon,
    alt: 'Sass Icon'
}

export const projects = [
    {
        type: 'front-end',
        title: 'Euro Moeda',
        description: 'Abiru biru',
        technologies: [react, sass],
        link: 'https://www.euromoeda.com/',
        img: euroMoedaImg,
        imgAlt: 'Imagens do site EuroMoeda',
    }, {
        type: 'back-end',
        title: 'Example',
        description: 'Lorem ipsum dolor sit amet. Qui consequatur rerum eum assumenda accusamus et fuga numquam quo reprehenderit sequi et sint exercitationem eum sequi eligendi et similique ratione. Non quas itaque qui odio incidunt in ducimus consequatur. Eum ullam eius hic voluptates tenetur nam consectetur possimus. Et voluptatem consequatur.',
        technologies: [react, sass],
        link: 'https://www.github.com/Siqm',
        img: ghostImg,
        imgAlt: 'This is a ghost loading image.'
    }
]