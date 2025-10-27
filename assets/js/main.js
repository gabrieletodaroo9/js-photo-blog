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
            const colEl = document.createElement("div")
            // - Al div aggiungo le classi "col-12 col-md-6 col-lg-4"
            colEl.classList.add("col-12", "col-md-6", "col-lg-4")
            // console.log(polaroidEl);

            // - Creo un altro div
            const polaroidEl = document.createElement("div")
            //  a cui do classe "polaroid"
            polaroidEl.classList.add("polaroid")
            // e lo appendo dentro il div creato precedentemente
            colEl.appendChild(polaroidEl)
            // console.log(colEl);

            // Creo l'immagine
            const imgPinEl = document.createElement("img")
            // a cui do la classe "pin"
            imgPinEl.classList.add("pin")
            // imposto l'src staticamente sull'url della foto
            imgPinEl.src = "./assets/img/pin.svg"
            polaroidEl.appendChild(imgPinEl)


            // Creo l'immagine
            const imgUserEl = document.createElement("img")
            // gli aggiungo la classe "user-img"
            imgUserEl.classList.add("user-img")
            // imposto l'src dinamicamente col template literal
            imgUserEl.src = `${url}`
            // Aggiungo il nodo al div "polaroid"
            polaroidEl.appendChild(imgUserEl)
            // console.log(colEl);

            // Creo il primo paragrafo (date)
            const dateEl = document.createElement("p")
            // Aggiungo il testo col template literal
            dateEl.innerHTML = `${date}`
            // Aggiungo il nodo al div "polaroid"
            polaroidEl.appendChild(dateEl)
            // console.log(colEl);
            
            // Creo il secondo paragrafo (testo)
            const titleEl = document.createElement("p")
            // Aggiungo il testo col template literal e lo rendo maiuscolo
            titleEl.innerHTML = `${title.toUpperCase()}`
            // Aggiungo il nodo al div "polaroid"
            polaroidEl.appendChild(titleEl)
            console.log(colEl);
            
            // Inserisco dentro l'elemento row dinamicamente la colonna che abbiamo creato
            rowEl.appendChild(colEl)
        });
    })







