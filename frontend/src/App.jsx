import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/auth/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

export default function App() {
	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/signup',
			element: <Signup />,
		},
	]);

	return (
		<>
			<RouterProvider router={appRouter} />
		</>
	);
}
