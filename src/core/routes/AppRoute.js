import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes as Switch
} from 'react-router-dom';

import { DashboardView, NotFound, NaturalEnviroment, MainPage } from '../../shared/modules';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' element={<MainPage />} />
                <Route path='/dashboard' element={<DashboardView />} />
                <Route path='/ne' element={<NaturalEnviroment />} />
                <Route path='*' element={<NotFound />} />
            </Switch>
        </Router>
    );
}