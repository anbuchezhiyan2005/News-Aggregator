import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./App.css";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import AddNews from "./components/addNews";
import GetNews from "./components/getNews";
import UpdateNews from "./components/UpdateNews";
import DeleteNews from "./components/DeleteNews";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/getMyNews">My Saved News</Link>
            </li>
            <li>
              <Link to="/addMyNews">Add News</Link>
            </li>
          </ul>
        </nav>
       <Routes>
          <Route path="/addMyNews" element={<AddNews />} />
          <Route path="/getMyNews" element={<GetNews />} />
          <Route path="/UpdateMyNews/:ID" element={<UpdateNews/>} />
          <Route path="/DeleteMyNews/:ID" element={<DeleteNews/>} />
       </Routes>
      </BrowserRouter>
    </div>
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
    </>
  );
}

export default App;