
const key = "58ca0630325e4fea3540d7efe023e22a"

function onScreen(data){
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".pre-text").innerHTML = data.weather[0].description
    document.querySelector(".umi").innerHTML = "Umidade do ar: " + data.main.humidity + "%"
    document.querySelector(".pre-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    
    console.log(data)
}



async function searchCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json()) 
    
    onScreen(data)

}


function buttonClick() {
    const city = document.querySelector(".search-input").value

    searchCity(city)

}