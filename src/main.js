import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import "./style.css";
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';      //import preset        
import 'primeicons/primeicons.css'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    tr: {
      message: {
        hello: 'merhaba dünya'
      }
    }
  }
})


app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara     
})
app.use(i18n)

app.mount('#app')

