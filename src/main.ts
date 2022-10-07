import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import myHeader from './components/MyHeader.vue'

createApp(App).component('myHeader', myHeader).mount('#app')
