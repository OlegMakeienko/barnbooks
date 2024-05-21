import './styles/book.css';
import BookType from "../models/bookType.ts";
import { Link } from "react-router-dom";

type Props = {
    book : BookType
}

function Book({ book } : Props) {
    return (
        <Link to={"/book/" + book.id} className="book-link">
            <article style={{backgroundColor : book.color }} className="book">
                <div className="book-binder"></div>
                <div className="book-cover">
                    <h2 className="book-title">{ book.title }</h2>
                    <h4 className="book-author">{ book.author }</h4>
                </div>
            </article>
        </Link>
    );
}

export default Book;