import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ThemeToggler from '../components/ThemeToggler';
import ThemeContext from '../contexts/ThemeContext';


export default function UseContext() {
    const theme = useState("light")

    return (
        <ThemeContext.Provider value={theme}>
            <Header />
            <ThemeToggler />
            <Footer />
        </ThemeContext.Provider>
    );
}


