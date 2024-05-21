import './styles/bookPage.css';
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import BookType from "../models/bookType.ts";

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
            <li>
                book Page
            </li>
        </section>
    );
}

export default BookPage;