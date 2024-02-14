import foodfeedimg from './assets/foodfeed.png'
import getrhythmimg from './assets/getrhythm.png'
import weather from './assets/weather-dashboard.png'
import noteTaker from './assets/note-taker.png'
import JATE from './assets/JATE.png'
import jsQuizImg from './assets/js-quiz.png'
import tahanan from './assets/project-screenshot-tahanan.png'

//create array of objects containing details for each project and their images
const projects = [
    {
        id: '1',
        img: tahanan,
        title: 'Tahanan Candle Co.',
        url: 'https://tahanancandleco.onrender.com/',
        github: 'https://github.com/mjthurber/Tahanan_Candle'
    },
    {
        id: '2',
        img: foodfeedimg,
        title: 'Foodfeed',
        url: 'https://enigmatic-hollows-51581-85d21f4c37a7.herokuapp.com/login',
        github: 'https://github.com/Phansen47/FoodFeed'
    },
    {
        id: '3',
        img: getrhythmimg,
        title: 'Get Rhythm',
        url: 'https://whitbreezy.github.io/get-rhythm/',
        github: 'https://github.com/whitbreezy/get-rhythm'
    },
    {
        id: '4',
        img: weather,
        title: 'Weather Dashboard',
        url: 'https://whitbreezy.github.io/weather-dashboard/',
        github: 'https://github.com/whitbreezy/weather-dashboard'
    },
    {
        id: '5',
        img: noteTaker,
        title: 'Note Taker',
        url: 'https://peaceful-badlands-58405-a2b39c56ddb2.herokuapp.com/',
        github: 'https://github.com/whitbreezy/note-taker'
    },
    {
        id: '6',
        img: JATE,
        title: 'Text Editor PWA',
        url: 'https://text-editor-pwa-x94e.onrender.com/',
        github: 'https://github.com/whitbreezy/text-editor-pwa'
    },
    {
        id: '7',
        img: jsQuizImg,
        title: 'JavaScript Quiz Game',
        url: 'https://whitbreezy.github.io/js-quiz/',
        github: 'https://github.com/whitbreezy/js-quiz'
    },
];


export default projects