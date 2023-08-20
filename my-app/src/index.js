import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import About from "./pages/About/About";
import Home from "./pages/Home/home";
import BookList from "./components/BookList/BookList";
import Bookdetalis from "./components/BookDetails/BookDetails";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
          <Route path = "/" element={<Home />}>
            <Route path="about" element={<About/>} />
            <Route path = "book" element = {<BookList />} />
            <Route path = "/book/:id" element={<Bookdetalis />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);


