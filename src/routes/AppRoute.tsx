import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes as Switch
} from 'react-router-dom';
import { DashboardView, MainPage, NaturalEnviroment, NotFound, UserProfile } from 'shared/modules';
import LoginPage from 'shared/modules/Login';


export default function AppRouter(_props: any) {
    return (
        <Router>
            <Switch>
                <Route path='/' element={<MainPage />} />
                <Route path='/dashboard' element={<DashboardView />} />
                <Route path='/ne' element={<NaturalEnviroment />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/profile' element={<UserProfile />} />
                <Route path='*' element={<NotFound />} />
            </Switch>
        </Router>
    );
}
