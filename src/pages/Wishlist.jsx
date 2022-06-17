import Header from "../component/Header";
import Footer from "../component/Footer";
import React, { useEffect, useState } from 'react';
import axios from 'axios'


const Wishlist = () => {
    const deleteReq = (id) =>{
        const remove = axios.delete(id, {headers: {
            "Authorization": token
          }})
        window.location.reload()
    }
    const [appState, setAppState] = useState([]);
    const token = `Token ${localStorage.getItem('token')}`
    useEffect(() => {
        const TicketUrl = 'https://kitapplay-backend.herokuapp.com/api/Wish/';
        axios.get(TicketUrl, {
            headers: {
              "Authorization": token
            }
          }).then((resp) => {
          const allTicket = resp.data;
          setAppState(allTicket);
        });
      }, [setAppState]);

    return (
        <>
        <div className="wishbody">
            <Header/>
            <div className='myticket'>
                <h2 className="heading">Сіздің таңдаулыларыңыз </h2>
                {appState.map((Ticket)=> 
                    <div className='ticket'>
                        <div className="wishimg">
                            <img src={Ticket.book_photo} style={{width:'100px'}}/>
                        </div>
                        <div key={Ticket.id}>
                            <div className='movie_name'>
                                Аудиокітаптің атауы: {Ticket.book_name}
                            </div>
                           
                            <div className='movie_data'>
                                Кітап авторы: {Ticket.book_author}
                            </div>
                            
                        </div>
                        <div className='delete'>
                            <button onClick={()=> deleteReq(Ticket.url)}>Delete</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer/></div>
        </>
    );
}

export default Wishlist;