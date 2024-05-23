import './styles/bookPage.css';
import { useState , useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import BookType from "../models/bookType.ts";
import Book from "../components/Book.tsx";
import BookDetails from "../components/BookDetails.tsx";
import { ArrowLeft } from "@phosphor-icons/react"

type BookProps = {
    books : BookType[],
    watchlist : BookType[],
    toggleBookInWatchlist : (id : number) => void
}

function BookPage({ books, watchlist, toggleBookInWatchlist } : BookProps) {
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
            <Link to="/" className="home-link">
                <ArrowLeft size={32} />
            </Link>
            <section className="page-wrapper book-wrapper">
                { book && <Book large={ true } book={ book }/> }
                { book && <BookDetails
                                    book={ book }
                                    watchlist={ watchlist }
                                    toggleBookInWatchlist={ toggleBookInWatchlist }
                                /> }

            </section>
        </section>
    );
}

export default BookPage;