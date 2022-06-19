import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
const NewBook = () => {
    const [newbook, setNewBook] = useState([]);  
    useEffect(() => {
        const apiUrl = 'https://kitapplay-backend.herokuapp.com/api/AudioKnigi/';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setNewBook(allPersons.slice(allPersons.length-4))
        });
    }, [setNewBook]);
    return (
        <>
            <section className="movies" id="new">
                <h2 className="heading">Жаңа топтама</h2>
                <div className="movies-container">
                    {newbook.map((book) =>
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

export default NewBook;