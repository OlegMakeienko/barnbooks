import './styles/homePage.css';
import BookType from "../models/bookType.ts";
import BookList from "../components/BookList.tsx";

type Props = {
    books : BookType[];
}

function HomePage({ books } : Props) {
    return (
        <section className="home-page">
            <section className="page-wrapper home-wrapper">
                <h1 className="home-title">{ books.length } Barn Böcker</h1>
                <BookList books = { books } />
            </section>
        </section>
    );
}

export default HomePage;