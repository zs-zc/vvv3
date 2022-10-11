import { createApp } from 'vue'
import './style.css'
import GloableComponent from "./components/GloableComponent.vue"
import App from './App.vue'

const app = createApp(App)
app.component("GC", GloableComponent)
app.mount('#app')
