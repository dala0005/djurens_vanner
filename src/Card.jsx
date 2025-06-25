import logoPic from "./assets/logo_tigerharen_150.png"

function Card(){
    const title = "TigerHaren";
    const type = "Djurfristad";
    const location = "Västra Götalands län";
    const started = "2004";
    const text = "Bla blahblalaluehfuewhfuewfh fewsfe efe  edede e e ededed e deefewfew ";
    const webpage = "https://tigerharen.org/";
    return(
        <div className="card">
            <img src={logoPic} alt="Logo picture"></img>
            <h2 className="card-title">{title}</h2>
            <p>Typ: {type}</p>
            <p>Län: {location}</p>
            <p>Grundades: {started}</p>
            <p>Webbsida: <a href={webpage} target="_blank">{webpage}</a></p>
            <hr></hr>
            <div className="card-text">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Card