import { HeroUIProvider } from '@heroui/react';
import { Navigate, Route, Routes, useHref, useNavigate } from 'react-router';
import AppLayout from './layouts/app';
import Home from './views/home';
import CardsView from './views/memes/cards-view';
import TableView from './views/memes/table-view';

const App = () => {
	const navigate = useNavigate();

	return (
		<HeroUIProvider navigate={navigate} useHref={useHref}>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="home" element={<Home />} />
					<Route path="memes">
						<Route path="table" element={<TableView />} />
						<Route path="cards" element={<CardsView />} />
					</Route>
					<Route path="*" element={<Navigate to="/home" />} />
				</Route>
			</Routes>
		</HeroUIProvider>
	);
};

export default App;
