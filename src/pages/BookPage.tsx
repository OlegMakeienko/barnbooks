import './styles/bookPage.css';
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import BookType from "../models/bookType.ts";
import Book from "../components/Book.tsx";
import BookDetails from "../components/BookDetails.tsx";

type BookProps = {
    books : BookType[]
}

function BookPage({ books } : BookProps) {
    const [book,setBook] = useState<BookType>();
    const { id } = useParams();

    useEffect(() => {
        if(typeof id !== "undefined") {
            const activeBook = books.find(b => b.id === parseInt(id));
            setBook(activeBook);
        }
    }, [id]);

    useEffect(() => {
        console.log(book);
    }, [book]);

    return (
        <section className="book-page">
            <section className="page-wrapper book-wrapper">
                { book && <Book large={ true } book={ book }/> }
                { book && <BookDetails book={ book }/> }

            </section>
        </section>
    );
}

export default BookPage;