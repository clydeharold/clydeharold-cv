import Home from './components/vueHome.vue';
import About from './components/vueAbout.vue';
import Education from './components/vueEducation.vue'
import Work from './components/vueWork.vue'
import Training from './components/vueTrainings.vue'
import Seminar from './components/vueSeminars.vue'
export const routes = [
    {path: '/',component: Home},
    {path: '/About',component:About},
    {path: '/Education',component:Education},
    {path: '/Work',component:Work},
    {path: '/Training',component:Training},
    {path: '/Seminar',component:Seminar}
];