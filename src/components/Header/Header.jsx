import React from 'react';
import styles from './Header.module.css'
import { HiMoon, HiSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModeContext';

export default function Header({ filters, filter, onFilterChange }) {
    const {darkMode, toggleDarkMode} = useDarkMode();
    return (
        <header className={styles.header}>
            <button onClick={toggleDarkMode} className={styles.toggle}>
                {!darkMode && <HiMoon />}
                {darkMode && <HiSun />}
            </button>
            <ul className={styles.filters}>
                {filters.map((val, idx) => (
                    <li key={idx}>
                        <button 
                            className={`${styles.filter} ${filter === val && styles.selected}`} 
                            onClick={() => onFilterChange(val)}
                        >
                            {val}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
}


