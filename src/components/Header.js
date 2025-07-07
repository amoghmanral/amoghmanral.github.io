'use client';
import styles from './Header.module.css';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
    const [theme, setTheme] = useState('light');
    const [menuOpen, setMenuOpen] = useState(false);

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

    const toggleMenu = () => setMenuOpen((open) => !open);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <div className={styles.logo}>~/amogh</div>
                <button
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                    <li><a href="#about" onClick={closeMenu}>about</a></li>
                    <li><a href="#projects" onClick={closeMenu}>projects</a></li>
                    <li><a href="#skills" onClick={closeMenu}>skills</a></li>
                    <li><a href="#contact" onClick={closeMenu}>contact</a></li>
                    <li><a href="https://www.linkedin.com/in/amogh-manral-688736248/" onClick={closeMenu}>resume</a></li>
                </ul>
                <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle dark mode">
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
        </header>
    );
} 