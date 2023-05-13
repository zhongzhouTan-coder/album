import { createNavJs } from '../../wasm_pkg'
import './styles.css'

export class App {

	render() {
		const navLinks = [
			{
				text: "Home",
				url: "index.html"
			},
			{
				text: "Products",
				url: "#"
			},
			{
				text: "Learn",
				url: "#"
			},
			{
				text: "About",
				url: "#"
			}
		]

		return createNavJs(navLinks)
	}
}