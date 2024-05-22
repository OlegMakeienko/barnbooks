import "./styles/bookDetails.css"
import BookType from "../models/bookType.ts";

type BookProps = {
    book : BookType
}

function BookDetails({ book } : BookProps) {
    return (
        <article className="book-details">
            <div className="book-details-header">
                <h1 className="book-details-title">{ book.title }</h1>
                <h4 className="book-details-author">{ book.author }</h4>
            </div>
            <p className="book-details-plot">{ book.plot }</p>
            <div className="book-details-group">
                <p className="book-details-info"><strong>Audience: </strong>{ book.audience }</p>
                <p className="book-details-info"><strong>First published: </strong>{ book.year }</p>
                <p className="book-details-info"><strong>Pages: </strong>{ book.pages }</p>
                <p className="book-details-info"><strong>Publisher: </strong>{ book.publisher }</p>
            </div>
            <button className="book-details-btn">Oh, I want to read it!</button>
        </article>
    );
}

export default BookDetails;