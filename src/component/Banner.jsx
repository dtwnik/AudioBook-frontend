import photo from '../assets/img/banner.jpg'
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Banner = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate()
    const Up = name.charAt(0).toUpperCase() + name.slice(1)
    const [searchdata, setSearchdata] = useState([])
    // useEffect(()=>{
    //     axios.get('http://127.0.0.1:8000/api/AudioKnigi/',{
    //         params: 
    //     {
    //         name: Up
    //     }}).then((resp) => {
    //         const sdata =resp.data;
    //         setSearchdata(sdata)
    //     })
    // },[searchdata])
    console.log(searchdata)
    return (
        <> 
            <div className="banner" id='home'>
                <div className='slogan'>Күш - білімде, <br/>білім - кітапта.</div>
                {/* <form className='searchForm'>
                    <input type='text' placeholder='Кітап атаулары бойынша іздеу' onChange={(e)=>setName(e.target.value)}></input>
                </form> */}
                
            </div>
        </>
    );
}

export default Banner;