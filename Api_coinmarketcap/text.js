////My api Key 
/*
var apikey = {
    key: '56409135-dcb0-446d-86b4-a2fdd9e38c1c :)'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
apikey.key)
.then((response) => {
    if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
})
.then((api) => {

var texto = "";
// Get 10 coins and symbols 
for(let i = 0; i < 10; i++){


//Show API information

   texto = texto + `
  
    <div class="media">
        <img src="coin.png" class="align-self-center mr-3" alt="coin" width="80" height="80">
        <div class="media-body">
        <h5 class="mt-2">${api.data[i].name}</h5>
        <h6 class="mb-1">${api.data[i].symbol}</h6>
        <p>${api.data[i].first_historical_data}</p>
        </div>
    </div>

    `;

    document.getElementById("coins").innerHTML = texto;
    
}
})
.catch((error) => {
    console.error(error.message);
});


*/
    //My api Key
    var minhaPromisse = function () {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest');
            xhr.setRequestHeader("X-CMC_PRO_API_KEY", '56409135-dcb0-446d-86b4-a2fdd9e38c1c');
        
            xhr.send();
        
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject('Erro na requisição')
                    }
                }
            }
        });
        }
        
        minhaPromisse()
                 .then((api) => {
                
                var texto = '';
                //Get 10 coins and symbols
                for(let i = 0; i < 10; i++) {

                    //show Api Information

                    texto = texto + `
                    
                    <div class="media">
                         <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                         <div class="media-body">
                         <h5 class="mt-2">${api.data[i].name}</h5>
                         <p>${api.data[i].symbol}</p>
                         <p>${api.data[i].first_historical_data}</p>

                     </div>
                    </div>
                    
                    `;

                    document.getElementById("coins").innerHTML = texto;
                }
            })
            .catch(function (error) {
                console.log(error)
    });

