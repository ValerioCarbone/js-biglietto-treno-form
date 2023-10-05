// - Chiedere all'utente il numero di km che vuole percorrere
//     - Creare un input html dove chiedere all'utente i km che vuole percorrere
//     - Inizializzare una variabile richiamando l'elemento per id
//     - Richiamare il value di quest'elemento 

// - Far selezionare all'utente la fascia di età in cui si trova
//     - Creare un select nell'html dove l'utente selezionerà la sua fascia di età
//     - Inizializzare una variabile a seconda della scelta dell'utente    

// - In base ai km e alla sua età calcolare il prezzo finale del biglietto applicando lo sconto, se dovuto
//      - Inizializzare una variabile che sarà la moltiplicazione dei km che l'utente vuole  percorrere per il costo per km

//  - Inizializzare  una variabile con il nome e cognome dell'utente

//      - Applicare, se dovuto, lo sconto
//      - Formattare il prezzo finale in una cifra con max 2 decimali              
//      - Stampare in console il risultato quando l'utente cliccherà il bottone

// - Creare un form dove l'uente inserirà il suo nome, i km che vuole percorrere, l'età
// - Creare un recap dei dati inseriti
//      - Inizializzare una variabile richiamando l'elemento html corrispettivo
//      - Modificare l'elemento html con il nome utente


//      - Inizializzare una variabile richiamando l'elemento html corrispettivo
//      - Modificare l'elemento html con i km selezionati

//      - Inizializzare una variabile richiamando l'elemento html corrispettivo
//      - Modificare l'elemento html con lo sconto applicato


//      - Inizializzare una variabile richiamando l'elemento html corrispettivo
//      - Modificare l'elemento html con il prezzo finale


const btn = document.querySelector('.btn-clc');
btn.addEventListener('click', function () {
    let userAge
    userAge = document.getElementById('age')
    userAge = parseInt(userAge.value)
    
    let userKm
    userKm = document.getElementById('km')
    userKm = parseFloat(userKm.value)
    
    let userName = document.getElementById('name-surname');
    userName = userName.value;
    
    let discountU18
    
    let discountO65
    
    let recapDiscount
    
    let ticketPrice = userKm * 0.21
    
    if (userAge === 0) {
        discountU18 = ticketPrice * 0.2
        console.log('Lo sconto U18 applicato sarà: ' + discountU18)
        ticketPrice = ticketPrice - discountU18
        recapDiscount = discountU18

    }
    else if (userAge === 2) {
        discountO65 = ticketPrice * 0.4
        console.log('Lo sconto O65 applicato sarà: ' + discountO65)
        ticketPrice = ticketPrice - discountO65
        recapDiscount = discountO65
    }
    else {
        recapDiscount = 0
    }
    console.log('Questi è lo sconto: ' + recapDiscount)

    console.log('Questi sono i km che hai selezionato: ' + userKm)
    
    ticketPrice = ticketPrice.toFixed(2)
    console.log(ticketPrice)

    let recapNameDOMElement = document.getElementById('user_name')
    recapNameDOMElement.innerHTML = userName

    let recapKmDOMElement = document.getElementById('user-km')
    recapKmDOMElement.innerHTML = userKm

    let recapDiscountDOMElement = document.getElementById('user-discount')
    recapDiscountDOMElement.innerHTML = recapDiscount

    let recapFinalPriceDOMElement = document.getElementById('user-final-price')
    recapFinalPriceDOMElement.innerHTML = ticketPrice


}
)

