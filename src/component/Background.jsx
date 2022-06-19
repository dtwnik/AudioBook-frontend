const Background = ({data}) => {
    return (
        <>
            <div class='imgbg' style={{ backgroundImage: `url(${data.photo})` }}></div>

        </>
    );
}

export default Background;