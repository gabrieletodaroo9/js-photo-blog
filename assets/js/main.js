// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

// Creo una variabile per richiamare il nodo della DOM riferito a "row"

const rowEl = document.getElementById("row")

// Effettuo una chiamata AJAX con fetch per estrarre i dati dall'API
url = "https://lanciweb.github.io/demo/api/pictures/"
fetch(url)
    .then(res => res.json())
    .then(data => {
        // Dopo averli estratti ciclo dentro all'array per poter interagire con ogni singolo elemento
        data.forEach(obj => {
            // - Destrutturo l'oggetto e salvo dentro una variabile ogni proprietà
            //    console.log(obj);
            const { id, title, date, url } = obj
            // console.log(id,title,date,url);

            // -Creo il nodo della DOM corrispondente alla polaroid
            colEl = document.createElement("div")
            // - Al div aggiungo le classi "col-12 col-md-6 col-lg-4"
            colEl.classList.add("col-12", "col-md-6", "col-lg-4")
            // console.log(polaroidEl);

            // - Creo un altro div
            polaroidEl = document.createElement("div")
            //  a cui do classe "polaroid"
            polaroidEl.classList.add("polaroid")
            // e lo appendo dentro il div creato precedentemente
            colEl.appendChild(polaroidEl)
            // console.log(colEl);
            

        });

    })



// Creo l'immagine a cui do la classe "pin"
// imposto l'src staticamente sull'url della foto

// Creo l'immagine
// gli aggiungo la classe "user-img"
// imposto l'src dinamicamente col template literal
// Aggiungo il nodo al div "polaroid"

// Creo il primo paragrafo (data)
// Aggiungo il testo col template literal
// Aggiungo il nodo al div "polaroid"

// Creo il secondo paragrafo (testo)
// Aggiungo il testo col template literal
// Aggiungo il nodo al div "polaroid"

// Inserisco dentro l'elemento row dinamicamente la colonna che abbiamo creato
