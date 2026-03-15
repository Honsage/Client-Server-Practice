import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logo from '@assets/book.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink to="/" className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </NavLink>
                
                <nav className={styles.nav}>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `${styles.link} ${isActive ? styles.active : ''}`
                        }
                    >
                        Главная
                    </NavLink>
                    <NavLink 
                        to="/catalog" 
                        className={({ isActive }) => 
                            `${styles.link} ${isActive ? styles.active : ''}`
                        }
                    >
                        Каталог
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            `${styles.link} ${isActive ? styles.active : ''}`
                        }
                    >
                        О проекте
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;