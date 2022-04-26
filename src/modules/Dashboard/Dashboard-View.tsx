<<<<<<< HEAD
import React from "react";
import AppLayout from "layouts/app-layout";
import { UserCard } from "components";
import CardBank from "components/CardBank/CardBank";
=======
import React from 'react';
import AppLayout from 'layouts/app-layout';
import { UserCard } from 'components';
import CardBank from 'components/CardBank/CardBank';
>>>>>>> 8d022efe1046e7f9a7f5bb028c163f4f17ac3fa6
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