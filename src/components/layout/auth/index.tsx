import { Outlet } from 'react-router-dom';
import "./auth.css"

export const AuthLayout = () => {
	return (
		<>
			<header>
				<h1>This is auth layout.</h1>
			</header>
			<main>
				<Outlet />
			</main>
			
		</>
	);
};