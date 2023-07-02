import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Search your book</h2><br />
                <p className='header-text fs-18 fw-3'>Our mission is to nurture the love of books and support your book-reading fantasies. Let’s use our love of books to collectively build brilliant, creative futures for ourselves and our world.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header