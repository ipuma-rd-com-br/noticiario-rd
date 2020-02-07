/*
Chamadas AJAX no JS
*/

const API_KEY = 'bfcfceca4ac94ee3807f66661b4d9c00';

let config = {
    method:'GET',
    body:null // usado quando method='POST'
}

let response = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey='+API_KEY, config) // params: action, config
                .then(
                    // param: um callback
                    (response)=>{
                        return response.json();
                    }
                ) 
                .then(
                    // aqui vai o que tem que acontecer com a resposta do fetch...
                    (json)=>{
                        mostrarNaTela(json.articles);
                    }
                )
                ; 

/*
 * Exibe as noticias na tela HTML
 */
function mostrarNaTela(noticias) {

    let divNoticias = document.getElementById("divNoticias");

    noticias.forEach((noticia) => {

        let htmlCardNoticia = 
            `<div class="card col-md-4">
                <img class="card-img-top" src="${noticia.urlToImage}" alt="${noticia.title}">
                <div class="card-body">
                    <h5 class="card-title">${noticia.title}</h5>
                    <p class="card-text text-justify">${noticia.description}</p>
                    <a href="${noticia.url}" class="btn btn-primary">Ir para site</a>
                </div>
            </div>`;
        
        divNoticias.insertAdjacentHTML('beforeend', htmlCardNoticia);
            
    });

    
}