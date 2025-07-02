
function Footer(props){

    return(
        <footer>
            <hr></hr>
            <p>&copy; {new Date().getFullYear()} {props.websiteName}</p>
        </footer>
    );
}

export default Footer