import { DashboardView, LandingPage, LoginPage, MainPage, NaturalEnvironment, NotFound, UserProfile } from "modules";
import React from "react";
import {
	Route,
	BrowserRouter as Router,
	Routes as Switch
} from "react-router-dom";

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
