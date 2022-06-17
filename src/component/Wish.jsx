import axios from "axios";
import React, { useEffect, useState } from 'react';
const Wish = ({data}) => {
    const userid = localStorage.getItem('id')
    const usertoken = `Token ${localStorage.getItem('token')}`
    const [wish, setWish] = useState('')
    const [wishstate, setWishstate] = useState()
    useEffect(() => {
        axios.get('https://kitapplay-backend.herokuapp.com/api/Wish/', {
            headers: {
                "Authorization": usertoken
            }, params: {
                book_name: data.name 
            }
        }).then((resp) => {
            const getbook = resp.data;
       
            setWish(getbook);
        });
    }, [setWish])
    console.log(wish.length)
    const addWish = async(e)=> {
        e.preventDefault()
        try {
            await axios.post('https://kitapplay-backend.herokuapp.com/api/Wish/',{book_name:data.name, book_author: data.author,book_photo:data.photo, user: `https://kitapplay-backend.herokuapp.com/api/User/${userid}/`})
            // console.log(data)
            alert("Таңдаулыларға қосылды")
        }
        catch (e) {
            alert("Таңдаулыларға қосу мүмкін емес, өйткені сізде бар")
        }
    }
    return (
        <><a className="wishbtn" onClick={addWish}>Таңдаулыларға қосыңыз</a></>

    );
}

export default Wish;