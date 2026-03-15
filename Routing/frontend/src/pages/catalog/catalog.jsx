import React from "react";
import BookCard from "@components/book-card/book-card";
import styles from "./catalog.module.css";
import bookList from "@utils/mock";

const CatalogPage = () => {
    return (
        <div>
            <section className={styles.bookGrid}>
                {bookList.map(book => (
                    <BookCard
                        id={book.id}
                        name={book.name}
                        description={book.description}
                    />
                ))}   
            </section>
        </div>
    );
};

export default CatalogPage;