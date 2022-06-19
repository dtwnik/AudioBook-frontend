
import Header from "../component/Header";
import Footer from "../component/Footer";
import '../css/SearchPage.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
const SearchPage = () => {
    const [name, setName] = useState('');

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const Up = searchTitle.charAt(0).toUpperCase() + searchTitle.slice(1)
    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const response = await axios.get(
                "https://kitapplay-backend.herokuapp.com/api/AudioKnigi/"
            );
            setPosts(response.data);
            setLoading(false);
        };

        loadPosts();
    }, []);
    return (
        <>
        <Header />
            <div className="searchcont">
                
                <div className='searchForm'>
                    <input
                        className='searchinput'
                        type="text"
                        placeholder="Кітап атаулары бойынша іздеу"
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                    {loading ? (
                        <h4>Loading ...</h4>
                    ) : (
                        posts
                            .filter((value) => {
                                if (searchTitle === "") {
                                    return value;
                                } else if (
                                    value.name?.includes(searchTitle.charAt(0).toUpperCase() + searchTitle.slice(1))
                                ) {
                                    return value;
                                }
                            })
                            .map((item) => 
                            <div className='searchL'>
                            <Link to={`/book/` + item.url.split('/')[5]} className="searchL">
                                <div className="searchlink">
                                <img src={item.photo} width='100px'/>
                                <h5 key={item.id}>{item.name}</h5>
                                </div>
                            </Link></div>)
                    )}</div>
               
            </div> <Footer />
        </>
    );
}

export default SearchPage;