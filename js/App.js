import '../styles/styles.css'
import AsyncRoute from 'preact-async-route'
import {Router} from 'preact-router'
import Home from './pages/Home'
import {h} from 'preact'

export const App = () => {
	return (
		<Router>
			<Home path="/" />
			<AsyncRoute path="/products" getComponent={() => import('./pages/Products').then(module => module.default)} />
			<AsyncRoute path="/about" getComponent={() => import('./pages/About').then(module => module.default)} />
		</Router>
	);
};