"use client";
import { createContext, useState } from "react";

export const SummaryContext = createContext();

const SummaryContextProvider = ({ children }) => {
    const [ summary, setSummary ] = useState([]);
    console.log("Summary Updated:", summary);
    return (
        <SummaryContext.Provider value={{ summary, setSummary }}>
            {children}
        </SummaryContext.Provider>
    );
};

export default SummaryContextProvider;