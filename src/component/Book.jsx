import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
const Book = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const apiUrl = 'https://kitapplay-backend.herokuapp.com/api/AudioKnigi/';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setBook(allPersons); 
        });
    }, [setBook]);
    console.log(book)
    return (
        <>
            <section className="movies" id="all">
                <h2 className="heading">Барлық кітаптар</h2>
                <div className="movies-container">
                    {book.map((book) =>
                        <div key={book.id}>
                            <div className="box">
                                <BookCard data={book} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Book;