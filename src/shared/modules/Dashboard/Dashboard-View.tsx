import React from 'react';
import AppLayout from 'core/layouts/app-layout';
import { UserCard } from 'shared/components';
import CardBank from 'shared/components/CardBank/CardBank';
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