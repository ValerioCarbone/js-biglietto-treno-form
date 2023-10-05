// - Chiedere all'utente il numero di km che vuole percorrere
//     - Creare un input html dove chiedere all'utente i km che vuole percorrere
//     - Inizializzare una variabile richiamando l'elemento per id
//     - Richiamare il value di quest'elemento 
        let userKm = document.getElementById('km');
        userKm = parseFloat(userKm.value);         
        
        
// - Far selezionare all'utente la fascia di età in cui si trova
//     - Creare un select nell'html dove l'utente selezionerà la sua fascia di età
//     - Inizializzare una variabile a seconda della scelta dell'utente    
        let userAge = document.getElementById('age');
        userAge = parseInt(userAge.value);
        

// - In base ai km e alla sua età calcolare il prezzo finale del biglietto applicando lo sconto, se dovuto
//      - Inizializzare una variabile che sarà la moltiplicazione dei km che l'utente vuole      percorrere per il costo per km
        let ticketPrice = userKm * 0.21;

//      - Applicare, se dovuto, lo sconto
//      - Formattare il perzzo finale in una cifra con max 2 decimali              
//      - Stampare in console il risultato quando l'utente cliccherà il bottone
        const btn = document.querySelector('.btn-clc')
        btn.addEventListener('click', function() {
            if (userAge === 0 ){
                const discountU18 = ticketPrice * 0.2
                console.log('Lo sconto U18 applicato sarà: '+ discountU18)
                ticketPrice = ticketPrice - discountU18
                
            }
            else if (userAge === 2) {
                const discountO65 = ticketPrice * 0.4
                console.log('Lo sconto O65 applicato sarà: '+ discountO65)
                ticketPrice = ticketPrice - discountO65 
            }
            
            console.log('Questi sono i km che hai selezionato: ' + userKm)
            ticketPrice = ticketPrice.toFixed(2)
            console.log(ticketPrice)  
        }
        )

        

// - Creare un form dove l'uente inserirà il suo nome, i km che vuole percorrere, l'età


// - Creare un recap dei dati inseriti