// import reactIcon from '/icons/react.svg'
// import sassIcon from '../icons/sass.svg'
import euroMoedaImg from '../images/euro-moeda.png'
import ghostImg from '../onFail/img-backup.svg'
import Autoescola from '../images/Autoescola.png'
import changeId from '../images/changeid.png'

const react = {
    img: process.env.PUBLIC_URL + '/icons/react.svg',
    alt: 'React Icon'
}
const sass = {
    img: process.env.PUBLIC_URL + '/icons/sass.svg',
    alt: 'Sass Icon'
}
const lua = {
    img: process.env.PUBLIC_URL + '/icons/lua.svg',
    alt: 'Lua Icon'
}
const javascript = {
    img: process.env.PUBLIC_URL + '/icons/javascript.svg',
    alt: 'Javascript Icon'
}
const api = {
    img: process.env.PUBLIC_URL + '/icons/api.svg',
    alt: 'API Icon'
}
const mySql = {
    img: process.env.PUBLIC_URL + '/icons/mysql.svg',
    alt: 'MySql Icon'
}
const craco = {
    img: process.env.PUBLIC_URL + '/icons/craco.svg',
    alt: 'Craco Icon'
}
const cef = {
    img: process.env.PUBLIC_URL + '/icons/cef.svg',
    alt: 'Chromium Embedded Framework Icon'
}

export const projects = [
    {
        type: 'front-end',
        title: 'Euro Moeda',
        description: 'Neste projeto, fui responsável por desenvolver todas as partes front-end e deploy. Através do consumo de Web APIs para manter os valores das moedas sempre atualizadas, montei conversores de moedas e gráficos. Registrei um dominio e fiz o deploy da aplicação.',
        technologies: [react, sass, api, javascript],
        link: 'https://www.euromoeda.com/',
        img: euroMoedaImg,
        imgAlt: 'Imagens do site EuroMoeda',
    }, {
        type: 'Front-end',
        title: 'React boilerplate p/ CEF',
        description: 'Neste projeto, fui responsável por criar uma solução escalável que fosse fácil para o front-end utilizar no desenvolvimento e para o back-end integrar. Como o React não é nativamente compatível com o CEF (Chromium Embedded Framework), era necessário algo que tornasse o processo de desenvolvimento mais ágil para todos.',
        technologies: [react, javascript, craco, cef],
        link: 'https://www.github.com/Siqm',
        img: ghostImg,
        imgAlt: 'This is a ghost loading image.'
    }, {
        type: 'back-end',
        title: 'Auto escola Metaverso FiveM',
        description: 'Nessa auto-escola imersiva, eu fui responsável por integrar o front-end com o back-end e dar funcionalidade a ele. Também criei todas as etapas e funcionamento dos "exames práticos" para todas as categorias de veícuilos',
        technologies: [javascript, lua, mySql],
        link: 'https://youtu.be/WAVdn4VXbPQ?si=795UCYAlo4EIu9rO',
        img: Autoescola,
        imgAlt: '.'
    }, {
        type: 'back-end',
        title: 'Troca de ID Metaverso FiveM',
        description: 'Este foi um projeto que peguei em andamento e que estava com bugs e com uma complexidade que não era necessário. Reestruturei a lógica da aplicação, deixando-a muito mais direta e simples, facilitando a manutenção do código e otimizando o processo de alteração no banco de dados. Também treinei o time de instalação para que entendesse como deveria ser devidamente adequado aos clientes e suas necessidades',
        technologies: [lua, mySql],
        link: 'https://youtu.be/oIkCx0uT9MM?si=PcqVugegm5cXAlmN',
        img: changeId,
        imgAlt: 'This is a ghost loading image.'
    },
]