import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Banner from '../components/Home/Banner';
import TransactionLayout from '../layouts/TransactionLayout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    },
    {
        path: "/transaction",
        element: <TransactionLayout></TransactionLayout>
    }
])