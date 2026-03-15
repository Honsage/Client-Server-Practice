import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
    return (
        <div>
            <h1 className={styles.title}>О проекте</h1>
            <p className={styles.text}>Онлайн-библиотека представляет собой портал для поиска и публикации книг в электронном формате.</p>
        </div>
    );
};

export default AboutPage;