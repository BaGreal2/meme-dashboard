import Navbar from '@/components/navbar';
import { Outlet } from 'react-router';

const AppLayout = () => {
	return (
		<main className="flex flex-col h-screen min-w-0">
			<Navbar />
			<div className="flex-1 overflow-auto">
				<Outlet />
			</div>
		</main>
	);
};

export default AppLayout;
