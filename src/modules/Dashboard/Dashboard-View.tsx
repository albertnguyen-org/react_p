import React from 'react';
import AppLayout from 'layouts/app-layout';
import { UserCard } from 'components';
import CardBank from 'components/CardBank/CardBank';
import "./Dashboard-View.scss";

export default function DashboardView() {
    return (
        <AppLayout>
            <div className='dashboard-container'>
                <p>Dashboard</p>
                <UserCard />
                <CardBank />
            </div>
        </AppLayout>
    );
} 