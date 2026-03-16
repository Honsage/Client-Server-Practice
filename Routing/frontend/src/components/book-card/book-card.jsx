import React from "react";
import { Link } from "react-router-dom";
import styles from "./book-card.module.css";

const BookCard = ({ id, name, author, description }) => {
    return (
        <div className={styles.bookCard}>
            <Link to={`/book/${id}`} className={styles.link}>
                <h3>
                    <span>{id}. </span>
                    {name}
                </h3>
            </Link>
            <p>{author}</p>
            <p>{description}</p>            
        </div>
    );
};

export default BookCard;