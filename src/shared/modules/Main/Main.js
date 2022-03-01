import React from 'react';
import { CusButton } from '../../components';
import {
    Link,
} from 'react-router-dom';


const MainPage = () => {

    return (
        <div className='home-container'>
            <li><Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/ne">Natural Environment</Link>
            </li>
        </div>
    );
}

export default MainPage;