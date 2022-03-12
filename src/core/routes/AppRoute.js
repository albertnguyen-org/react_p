import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes as Switch
} from 'react-router-dom';

import { DashboardView, NotFound, NaturalEnviroment, MainPage } from '../../shared/modules';
import LoginPage from '../../shared/modules/Login';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' element={<MainPage />} />
                <Route path='/dashboard' element={<DashboardView />} />
                <Route path='/ne' element={<NaturalEnviroment />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<NotFound />} />
            </Switch>
        </Router>
    );
}