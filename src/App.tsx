import {useState, useEffect} from "react";
import HomePage from "./pages/HomePage.tsx";
import BookPage from "./pages/BookPage.tsx";
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import BookType from "./models/bookType.ts";

function App() {
    const [books, setBooks] = useState<BookType[]>([]);
    const [watchlist, setWatchlist] = useState<BookType[]>([]);

    useEffect(
        () => {
            axios.get('https://santosnr6.github.io/Data/childrens_books.json')
                .then(response =>{
                    setBooks(response.data);
                })
                .catch((error: string) => console.log(error));
        }, []
    );

    useEffect(() => {
        console.log(books);
    }, [books]);

    const toggleBookInWatchlist = (id : number) => {
        if(watchlist.some(book => book.id === id)) {
            console.log("Will delete it from watchlist");
            const filteredWatchlist = watchlist.filter(book => book.id !== id);
            setWatchlist(filteredWatchlist);
        } else {
            console.log("Add it to watchlist");
            setWatchlist(watchlist =>
            {
                const addedBook = books.find(book => book.id === id);
                return addedBook ? [...watchlist, addedBook] : watchlist;
            });
        }
    }

  return (
      <div className="app">
      <Routes>
          <Route path="/" element={<HomePage books={ books } />} />
          <Route path="/book/:id" element={<BookPage
                                                books={ books }
                                                watchlist={ watchlist }
                                                toggleBookInWatchlist={ toggleBookInWatchlist }
                                            /> } />
      </Routes>
    </div>
  )
}

export default App
