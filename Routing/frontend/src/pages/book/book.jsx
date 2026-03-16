import React from "react";
import { useParams } from "react-router-dom";
import BookCard from "@components/book-card/book-card";
import { getBookById } from "../../utils/mock";

const BookPage = () => {
    const { id } = useParams();
    const book = getBookById(parseInt(id));
    console.log(book);
    const { _, name, author, description } = book;

    return (
        <div>
            <BookCard 
                id={id}
                name={name}
                author={author}
                description={description} 
            />
        </div>
    );
};

export default BookPage;