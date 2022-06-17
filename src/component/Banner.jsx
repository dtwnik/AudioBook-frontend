import photo from '../assets/img/banner.jpg'
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
const Banner = () => {

    return (
        <>
            <div className="banner" id='home'>
                <div className='slogan'>Күш - білімде, <br />білім - кітапта.</div>
            </div>
        </>
    );
}

export default Banner;