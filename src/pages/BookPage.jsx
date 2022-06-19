import '../css/BookPage.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../component/Header';
import Background from '../component/Background';
import Footer from '../component/Footer';
import BookContent from '../component/BookContent';
import Player from '../component/Player';
import Wish from '../component/Wish';
const BookPage = () => {
    const { id } = useParams()
    const [appState, setAppState] = useState();
    useEffect(() => {
        const apiUrl = 'https://kitapplay-backend.herokuapp.com/api/AudioKnigi/' + id;
        axios.get(apiUrl).then((resp) => {
          const allPersons = resp.data;
          setAppState(allPersons);
        });
      }, [setAppState]);
      if (!appState || appState.length === 0) return <p>Not founded</p>
    return (
        <>
        <Header/>
        <Background data={appState}/>
        <BookContent data={appState}/>
        <div className='wish'>
            <Wish data={appState}/>
            <Player data={appState}/>
        </div>
        <Footer/>
        </>
    );
}

export default BookPage;