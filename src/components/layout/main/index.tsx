import { Outlet, Link } from 'react-router-dom';
import "./main.css"

export const MainLayout = () => {
	return (
		<>
			<header>
				<h1>this is main layout</h1>
				<nav>
					<ul>
						<li  id='home'>
							<Link to='/'>Home</Link>
						</li>
						<li id='about'>
							<Link to='/about'>About</Link>
						</li>
						<li id='product'>
							<Link to='/product'>Product</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Outlet />
				<button id='logout'>Log out</button>
			</main>
			
			
		</>
	);
};