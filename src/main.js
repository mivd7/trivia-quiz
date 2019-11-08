import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store'
import Home from './views/Home';
import Game from './views/Game';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		// meta: {},
		name: "Home",
		component: Home
	},
	// {
	// 	path: "/profile",
	// 	meta: {},
	// 	name: "Profile",
	// 	component: Profile
	// },
	{
		path: "/game/:level",
		// meta: { breadcrumb: true },
		name: "Game",
		component: Game
	},
];
const router = new VueRouter({
    mode: 'history',
    routes
  });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
