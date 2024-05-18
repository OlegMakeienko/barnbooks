import HomePage from "./pages/HomePage.tsx";
import BookPage from "./pages/BookPage.tsx";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/book/:id" element={<BookPage/>}/>
      </Routes>
    </div>
  )
}

export default App
