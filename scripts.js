const key = "449cfc1aceafc5e57f7ddfc15928e8d1";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`;
    document.querySelector(".temp").innerHTML = `${Math.floor(dados.main.temp)} °C`;
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`;
}

async function buscarCidade(city_name) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const city_name = document.querySelector(".input-cidade").value;
    buscarCidade(city_name);
}

// Chame a função para definir o plano de fundo quando a página carregar
// window.onload = mudarFundo;