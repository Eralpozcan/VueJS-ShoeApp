import { createApp } from 'vue'
import "./style.css";
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';      //import preset        
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara     
});

app.mount('#app')

