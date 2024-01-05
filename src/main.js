import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import "./style.css";
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';      //import preset        
import 'primeicons/primeicons.css'
import * as Sentry from "@sentry/vue";

const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      category: {
        men: 'Men',
        women: 'Women'
      },
      change_language: 'Change Language',
      locale_en: 'English',
      locale_tr: 'Turkish',
      totalPrice: 'Total Price',
      go_to_Payment: 'Go to Payment Page',
      all_cart_items: 'All Cart Items',
      add_to_cart: 'Add to Cart',
    },
    tr: {
      category: {
        men: 'Erkek',
        women: 'Kadın'
      },
      change_language: 'Dili Değiştir',
      locale_en: 'English',
      locale_tr: 'Türkçe',
      totalPrice: 'Toplam Fiyat',
      go_to_Payment: 'Ödeme Sayfasına Git',
      all_cart_items: 'Tüm Sepet Ürünleri',
      add_to_cart: 'Sepete Ekle',
    }
  }
})

Sentry.init({
  app,
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 0.1, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara     
})
app.use(i18n)

app.mount('#app')

