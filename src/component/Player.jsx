const Player = ({data}) => {
    return (
        <>
            <audio controls className="audioPlayer">
                <source src={data.audio_url} />
                <p></p>
                
            </audio>
        </>
    );
}

export default Player;