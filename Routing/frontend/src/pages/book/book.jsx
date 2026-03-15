import React from "react";
import Header from "@components/header/header";

const BookPage = () => {
    const { id } = useParams();

    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
};

export default BookPage;