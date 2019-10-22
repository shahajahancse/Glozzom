
// importing components
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Services from './pages/Services.vue'
import Blog from './pages/Blog.vue'
import Contact from './pages/Contact.vue'

// routes 
export default [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact }
  
]