import React from "react";
import BookCard from "@components/book-card/book-card";

const BookPage = () => {
    const { id } = useParams();

    return (
        <div>
            <BookCard />
        </div>
    );
};

export default BookPage;