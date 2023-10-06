// - Creare l'evento click

const btn = document.querySelector('.btn-clc');
btn.addEventListener('click', function () {

    // - Far selezionare all'utente la fascia di età in cui si trova
    //     - Creare un select nell'html dove l'utente selezionerà la sua fascia di età
    //     - Inizializzare una variabile a seconda della scelta dell'utente 
    let userAge
    userAge = document.getElementById('age')
    userAge = userAge.value

    // - Chiedere all'utente il numero di km che vuole percorrere
    //     - Creare un input html dove chiedere all'utente i km che vuole percorrere
    //     - Inizializzare una variabile richiamando l'elemento per id
    //     - Richiamare il value di quest'elemento    
    let userKm
    userKm = document.getElementById('km')
    userKm = parseFloat(userKm.value)

    // - Chiedere all'utente nome e cognome
    //      - Inizializzare  una variabile con il nome e cognome dell'utente
    let userName = document.getElementById('name-surname');
    userName = userName.value;


    // - In base ai km e alla sua età calcolare il prezzo finale del biglietto applicando lo sconto, se dovuto
    //      - Inizializzare una variabile che sarà la moltiplicazione dei km che l'utente vuole  percorrere per il costo per km
    let ticketPrice = userKm * 0.21


    let discountU18

    let discountO65

    let recapDiscount

    //      - Applicare, se dovuto, lo sconto
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

    //      - Formattare il prezzo finale in una cifra con max 2 decimali  
    ticketPrice = ticketPrice.toFixed(2)

    //      - Stampare in console il risultato quando l'utente cliccherà il bottone
    console.log(ticketPrice)

    //      - Impedire all'utente di ottenere un risultato se non inserisce dati corretti
    if ((userKm < 0)||(userKm = 'NaN')) {
        userKm = 'Inserire i dati'
        userName = 'Inserire i dati'
        recapDiscount = 'Inserire i dati'
        ticketPrice = 'Inserire i dati'
    }
    else if (userName = '') {
        userKm = 'Inserire i dati'
        userName = 'Inserire i dati'
        recapDiscount = 'Inserire i dati'
        ticketPrice = 'Inserire i dati'
    }

    // - Creare un form dove l'uente inserirà il suo nome, i km che vuole percorrere, l'età
    // - Creare un recap dei dati inseriti
    //      - Inizializzare una variabile richiamando l'elemento html corrispettivo
    //      - Modificare l'elemento html con il nome utente
    let recapNameDOMElement = document.getElementById('user_name')
    recapNameDOMElement.innerHTML = userName

    //      - Inizializzare una variabile richiamando l'elemento html corrispettivo
    //      - Modificare l'elemento html con i km selezionati
    let recapKmDOMElement = document.getElementById('user-km')
    recapKmDOMElement.innerHTML = userKm

    //      - Inizializzare una variabile richiamando l'elemento html corrispettivo
    //      - Modificare l'elemento html con lo sconto applicato
    let recapDiscountDOMElement = document.getElementById('user-discount')
    recapDiscountDOMElement.innerHTML = recapDiscount

    //      - Inizializzare una variabile richiamando l'elemento html corrispettivo
    //      - Modificare l'elemento html con il prezzo finale
    let recapFinalPriceDOMElement = document.getElementById('user-final-price')
    recapFinalPriceDOMElement.innerHTML = ticketPrice








}
)

