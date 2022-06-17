const Background = ({data}) => {
    // const photo = data.photo
    // console.log(data.photo)
    return (
        <>
            <div class='imgbg' style={{ backgroundImage: `url(${data.photo})` }}></div>
            {/* <div className="bookbg">
                <img src={data.photo}/>
            </div> */}
        </>
    );
}

export default Background;