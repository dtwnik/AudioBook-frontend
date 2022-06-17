import { Link } from 'react-router-dom'
const BookCard = ({data}) => {
    const id = data.url.split('/')[5]
    return (
        <>
            <Link to={'/book/' + id}>
                <div className="box-img">
                    <img src={data.photo} alt="" />
                </div>
                <h3>{data.name}</h3>
                <span className='spancard'>{data.author}</span><br/>
                <span >{data.genre}</span>
            </Link>
        </>
    );
}

export default BookCard;