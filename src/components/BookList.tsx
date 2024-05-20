import './styles/bookList.css';
import Book from "./Book.tsx";
import BookType from "../models/bookType.ts";

type Props= {
    books : BookType[]
}

function BookList({ books } : Props) {
    return (
        <section className="book-list">
            {
                books.map(book => {
                    return <Book book={ book } key={ book.id}/>
                })
            }
        </section>
    );
}

export default BookList;