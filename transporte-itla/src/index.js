import React from 'react';
import ReactDOM from 'react-dom/client';
import { NotificationProvider } from './context/notification.context';
import AppRouter from './routes/AppRouter';
import './styles/App.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NotificationProvider>
        <AppRouter />
    </NotificationProvider>
);
