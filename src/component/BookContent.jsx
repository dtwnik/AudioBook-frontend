const BookContent = ({data}) => {
    return (
        <>
            <div className="mb-3 book-content containerDetail">
                <div className="book-content poster">
                    <img className='img' width="360px" height='540px' src={data.photo} />
                </div>
                <div className="info">
                    <h1 className="title">
                        {data.title}
                    </h1>
                    Авторы: <span style={{ fontWeight: 'bold' }}>{data.author}</span>
                    <div className="genres">
                        <span>Жанры: {data.genre.split(',').map((value, i) => (
                            <span key={i} style={{ fontWeight: 'bold' }}>{value}</span>
                        ))}</span>
                    </div>
                    <p className="overview">Сипаттамасы: <br />{data.desc}</p>
                    <p>Шыққан жылы: {data.year}</p>
                </div>

            </div></>
    );
}

export default BookContent;