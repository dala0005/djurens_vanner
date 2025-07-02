
function Card(props){
    return(
        <div className="card">
            <img className="card-img" src={props.logoPic} alt="Logo picture"></img>
            <h2 className="card-title">{props.title}</h2>
            <p>Typ: {props.type}</p>
            <p>Län: {props.location}</p>
            <p>Grundades: {props.started}</p>
            <p>Webbsida: <a href={props.webpage} target="_blank">{props.webpage}</a></p>
            <hr></hr>
            <div className="card-text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Card