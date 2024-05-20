import './styles/book.css';
import BookType from "../models/bookType.ts";

type Props = {
    book : BookType
}

function Book({ book } : Props) {
    return (
        <article style={{backgroundColor : book.color }} className="book">
            <div className="book-binder"></div>
            <div className="book-cover">
                <h2 className="book-title">{ book.title }</h2>
                <h4 className="book-author">{ book.author }</h4>
            </div>
        </article>
    );
}

export default Book;