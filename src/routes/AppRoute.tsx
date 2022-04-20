import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes as Switch
} from 'react-router-dom';
import { DashboardView, MainPage, NaturalEnvironment, NotFound, UserProfile } from 'modules';
import LoginPage from 'modules/Login';

export default function AppRouter(_props: any) {
    return (
        <Router>
            <Switch>
                <Route path='/' element={<MainPage />} />
                <Route path='/dashboard' element={<DashboardView />} />
                <Route path='/ne' element={<NaturalEnvironment />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/profile' element={<UserProfile />} />
                <Route path='*' element={<NotFound />} />
            </Switch>
        </Router>
    );
}
