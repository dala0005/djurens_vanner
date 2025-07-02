
function Header(props){

    return(
        <header>
            <h1>{props.websiteName}</h1>
            <nav>
                <ul>
                    <li><a href="#">Hem</a></li>
                    <li><a href="#">Kategorier</a></li>
                    <li><a href="#">Om oss</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header