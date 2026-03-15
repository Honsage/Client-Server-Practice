import React from "react";
import styles from "./home.module.css";

const HomePage = () => {
    return (
        <div>
            <h1 className={styles.title}>Добро пожаловать!</h1>
            <p className={styles.text}>Это главная страница онлайн-библиотеки.</p>
        </div>
    );
}

export default HomePage;