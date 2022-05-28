import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import OurServices from '../pages/OurServices.vue'
import Portfolio from '../pages/Portfolio.vue'
import PortfolioP1 from '../pages/PortfolioP1'
import PortfolioP2 from '../pages/PortfolioP2'
import PortfolioP3 from '../pages/PortfolioP3'
import Resources from '../pages/Resources.vue'
import Blog from '../pages/Blog.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

import Login from '../pages/Login.vue'
import Register from  '../pages/Register.vue'
import Forgot from  '../pages/Forgot.vue'
import Reset from  '../pages/Reset.vue'
import Profile from  '../pages/Profile.vue'
import Privacy from  '../pages/Privacy.vue'
import Terms from  '../pages/Terms.vue'



const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/web/home'
  },
  {
    path: '/web',
    component: DashboardLayout,
    redirect: '/web/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'about-us',
        name: 'About Us',
        component: AboutUs
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio
      },
      {
        path: 'portfolioP1',
        name: 'PortfolioP1',
        component: PortfolioP1
      },
      {
        path: 'portfolioP2',
        name: 'PortfolioP2',
        component: PortfolioP2
      },
      {
        path: 'portfolioP3',
        name: 'PortfolioP3',
        component: PortfolioP3
      },
      {
        path: 'our-services',
        name: 'Our Services',
        component: OurServices
      },
      {
        path: 'resources',
        name: 'Resources',
        component: Resources
      },
      {
        path: 'blog',
        name: 'Blog',
        component: Blog

      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'forgot',
        name: 'Forgot',
        component: Forgot
      },
      {
        path: 'reset-password/:email/:token',
        name: 'Reset',
        component: Reset
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'privacy',
        name: 'Privacy',
        component: Privacy
      },
      {
        path: 'terms',
        name: 'Terms',
        component: Terms
      },
    ]
  },
  { path: '*', component: NotFoundPage }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
