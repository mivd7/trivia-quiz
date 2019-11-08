import Home from '../views/Home';
import Game from '../views/Game';

export default [
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
		path: "/game",
		// meta: { breadcrumb: true },
		name: "Game",
		component: Game
	},
];