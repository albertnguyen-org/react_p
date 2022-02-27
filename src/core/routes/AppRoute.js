
import {
    BrowserRouter as Router,
    Route,
    Routes as Switch
} from 'react-router-dom';
import { DashboardView, NotFound } from '../../shared/modules';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/dashboard' element={<DashboardView />} />
                <Route path='*' element={<NotFound />} />
            </Switch>
        </Router>
    );
}