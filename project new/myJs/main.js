$(function () {
    $.ajax({
        url: "https://api.coingecko.com/api/v3/coins/",
        success: coins => informationFromWeb(coins),
        error: err => alert("error" + err)

    })
})

function informationFromWeb(coins) {

    // let cards = ""
    // let i=0

    for (let i = 0; i < 50; i++) {

        let card =
            `
             <div class="card" style="width:14rem;>
             <div class="card-body">
 
             <div class="custom-control custom-switch">
             <label class="switch">
             <input type="checkbox">
             <span class="slider round"></span>
             </label>
             
             
             </div>
 
 
             <h5 class="card-title">${coins[i].symbol}</h5>
             <p class="card-text">${coins[i].name}</p>
             
             <p>
             <a id="moreInfoBtn" class="btn btn-primary" data-toggle="collapse" href="#collapseExample${i}" >
             More Info
             </a>
             
             </p>
             <div class="collapse" id="collapseExample${i}">
             <div class="card card-body">
             <div id = "imageCards">
             <img id="coinsIMG" src= "${coins[i].image.small}">
             </div>
             <div>Currency Prices:<br>
         USD: $${coins[i].market_data.current_price.usd}<br>
         EUR: €${coins[i].market_data.current_price.eur}<br>
         ILS: ₪${coins[i].market_data.current_price.ils}
         </div>
             
           
             
             `


        // cards += card
        // i++
        $(".container").append(card);

        // if(i===100)break;
    }


}

$("#btnHome").click(function () {
    $(".container").show();
    $("form").show();
    $(".about").css("display", "none");


}
)



$("#btnabout").click(function () {
    $(".container").hide()
    $(".about").show()
    $("#serachForm").hide()
    $(".about").css("background-color", "beige");

}




)

$("#submitButton").on("click", function (e) {
    e.preventDefault();
    const inputData = $("#cName").val()

    $.ajax({
        url:`https://api.coingecko.com/api/v3/coins/${inputData}`,
        success: function (coins) {
            console.log(coins)
            // search(coins);
            $("#card").empty();
            $("#card").append(`<div class="card" style="width: 16rem;  border: 1px solid black;">
                <div class="card-body">
                <div class="toggle">
                <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
                </label></div>
                  <h5 class="card-title">${coins.symbol}</h5>
                  <p class="card-text">${coins.id}</p>
                  
                  <button class="btn btn-dark btnInfo"  type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"style="background-color:black ; border: 1px solid black; color: white" >More Info</button>
                  
                  
                  
                  <div class="collapse" id="collapseExample">
                  <div class="card card-body coinInfo">
                  <p><img src="${coins.image.small}" alt="coinImg"></p>
                   <p class="card-text"> Price in USD: ${coins.market_data.current_price.usd} $</p>
                    <p class="card-text">Price in ILS: ${coins.market_data.current_price.ils} ₪</p>
                    <p class="card-text">Price in EUR: ${coins.market_data.current_price.eur} €</p>
                </div>
              </div>
              
            
                   </div>
                  </div>
                 
                  
              `)

        },
        error: err => {
            alert(err.message)
        }
    })
})