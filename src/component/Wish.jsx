import axios from "axios";
import React, { useEffect, useState } from 'react';
import wishlogo from '../assets/img/heart.png'
import activewish from '../assets/img/activewish.png'
import wishpng from '../assets/img/wish.png'
const Wish = ({data}) => {
    const userid = localStorage.getItem('id')
    const usertoken = `Token ${localStorage.getItem('token')}`
    const [wish, setWish] = useState('')
    const [wishstate, setWishstate] = useState(false)
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
    const addWish = async(e)=> {
        e.preventDefault()
        try {
            await axios.post('https://kitapplay-backend.herokuapp.com/api/Wish/',{book_name:data.name, book_author: data.author,book_photo:data.photo, user: `https://kitapplay-backend.herokuapp.com/api/User/${userid}/`})
            alert("Таңдаулыларға қосылды")
            window.location.reload()
        }
        catch (e) {
            alert("Таңдаулыларға қосу мүмкін емес, өйткені сізде бар немесе сіз тіркелмегесіз")
        }
    }
    if(wish.length==1){
        return (<><a onClick={addWish}><img src={activewish} title="heart icons" style={{width:'50px', height:'50px'}}></img></a></>)
    }
    else{
        return (<><img src={wishpng} onClick={addWish} title="heart icons" style={{width:'50px', height:'50px', background_color:'red'}}></img></>)
    }
    return (
        <></>

    );
}

export default Wish;