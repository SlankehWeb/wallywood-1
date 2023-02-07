import { Routes, Route } from 'react-router-dom';
import Home from '../../../Pages/Home/Home';
import {PosterDetails, PosterList, Posters} from '../../../Pages/Posters/Posters';

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path=":slug" element={<PosterList />} />
				<Route path=":slug/:poster" element={<PosterDetails />} />
			</Route>
		</Routes>
	);
}

export default AppRouter;