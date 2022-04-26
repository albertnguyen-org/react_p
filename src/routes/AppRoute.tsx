import { DashboardView, LandingPage, LoginPage, MainPage, NaturalEnvironment, NotFound, UserProfile } from "modules";
import React from "react";
import {
<<<<<<< HEAD
	Route,
	BrowserRouter as Router,
	Routes as Switch
} from "react-router-dom";
=======
    BrowserRouter as Router,
    Route,
    Routes as Switch
} from 'react-router-dom';
import { DashboardView, MainPage, NaturalEnviroment, NotFound, UserProfile } from 'modules';
import LoginPage from 'modules/Login';

>>>>>>> 8d022efe1046e7f9a7f5bb028c163f4f17ac3fa6

export default function AppRouter(_props: any) {
	return (
		<Router>
			<Switch>
				<Route path='/' element={<MainPage />} />
				<Route path='/dashboard' element={<DashboardView />} />
				<Route path='/ne' element={<NaturalEnvironment />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/profile' element={<UserProfile />} />
				<Route path='/landing-page' element={<LandingPage />} />
				<Route path='*' element={<NotFound />} />
			</Switch>
		</Router>
	);
}
