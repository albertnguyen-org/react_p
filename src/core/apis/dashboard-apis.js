import React from 'react';
import HttpClient from '../configs/httpClient';

class DashboardApi extends HttpClient {
    async getDashboard() {
        let result = await this.get({ path = "/api/v1/dashboard" });
        return result;
    }
}