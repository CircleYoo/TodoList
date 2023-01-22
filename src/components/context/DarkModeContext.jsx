import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
        // setDarkMode(!darkMode);

        updateDarkMode(!darkMode)
    }
    useEffect(() => {
        const isDark = 
        localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
            window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
        updateDarkMode(isDark);
    }, [])

    return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
}

function updateDarkMode(darkMode) {
    if(darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

// 하나하나 DarkModeContext인 것을 알리지 않고
// 훅을 만들어서 내부적으로 DarkModeContext을 사용할 수 있도록 함 
export const useDarkMode = () => useContext(DarkModeContext)