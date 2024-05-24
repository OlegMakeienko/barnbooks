import './styles/homePage.css';
import BookType from "../models/bookType.ts";
import BookList from "../components/BookList.tsx";
import {Link} from "react-router-dom";

type Props = {
    books : BookType[];
}

function HomePage({ books } : Props) {
    return (
        <section className="home-page">
            <Link to="/watchlist">Watchlist</Link>
            <section className="page-wrapper home-wrapper">
                <h1 className="home-title">{ books.length } Barn Böcker</h1>
                <BookList books = { books } />
            </section>
        </section>
    );
}

export default HomePage;