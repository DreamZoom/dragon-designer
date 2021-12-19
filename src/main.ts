import { createApp } from 'vue'
import App from './App.vue'
import designer from "./designer"

const app =createApp(App)
app.use(designer);
app.mount('#app')
