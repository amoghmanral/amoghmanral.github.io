'use client';
import styles from './Header.module.css';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <div className={styles.logo}>~/amogh</div>
                <ul className={styles.navLinks}>
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="#resume">resume</a></li>
                </ul>
                <button className={styles.themeToggle} onClick={toggleTheme}>
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
        </header>
    );
} 