import Card from "./Card"

function ListCards(props)  {

    const cards = [{id: 1, title: "TigerHaren", type: "Djurfristad", location: "Västra Götalands län", started: "2004", webpage: "https://tigerharen.org/", text: "Tigerharen är en ideell organisation som startades 2004. Vi utgår från en djurrättslig grund i vårt arbete och är en vegansk fristad. I slutet av 2017 köpte vi äntligen en egen gård och vi jobbar nu främst med att bygga upp en permanent djurfristad. Vi vill skapa en plats för djuren där de får finnas till för sin egen skull och leva ett innehållsrikt liv på sina egna villkor.", logoPic: "src/assets/logo_tigerharen_150.png"},
                   {id: 2, title: "Rädda Djuren", type: "Djurfristad & Omplacering", location: "Örebro län", started: "2008", webpage: "https://raddadjuren.org/", text: "Vi är en djurfristad utanför Örebro dit utsatta individer får slå sig till ro och bo för alltid. På gården bor djur av många olika arter, alla med unika personligheter och erfarenheter. Men de delar alla samma längtan och rätt att få leva för sin egen skull.", logoPic: "src/assets/cropped-radda-djuren.webp"}];

    
    cards.sort((a,b) => a.title.localeCompare(b.title)); // Alphabetical list

    const listCards = cards.map(card => <Card key={card.id} title={card.title} type={card.type} location={card.location} started={card.started}  webpage={card.webpage} text={card.text} logoPic={card.logoPic} />);

    return(<>{listCards}</>); 
}

export default ListCards