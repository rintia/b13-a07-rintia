"use client";
import SummaryContextProvider from '@/context/SummaryContext';
import React from 'react';

const Providers = ({ children }) => {
    return <SummaryContextProvider>
        {children}
    </SummaryContextProvider>

};

export default Providers;