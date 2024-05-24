import "./styles/watchlistPage.css"
import BookType from "../models/bookType.ts";
import Book from "./Book.tsx";

interface WatchlistPageProps {
    watchlist : BookType[]
}

function WatchlistPage({ watchlist }: WatchlistPageProps) {
    return (
        <section className="watchlist-page">
            <section className="watchlist-wrapper">
                {
                    watchlist.map(book => {
                        return <Book book={ book } />
                    })
                }
            </section>
        </section>
    );
}

export default WatchlistPage;