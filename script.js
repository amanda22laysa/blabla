const apiKey = 'a0de4112c986f075455c735a7be1e780'; // Insira sua chave da API aqui
const weatherButton = document.getElementById('weatherButton');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

weatherButton.addEventListener('click', () => {
    const city = cityInput.value.trim();

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}&units=metric&lang=pt_br`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Cidade não encontrada');
                }
                return response.json();
            })
            .then(data => {
                const { main, weather } = data;
                weatherResult.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Temperatura: ${main.temp}°C</p>
                    <p>Clima: ${weather[0].description}</p>
                `;
            })
            .catch(error => {
                weatherResult.innerHTML = `<p>${error.message}</p>`;
            });
    } else {
        weatherResult.innerHTML = '<p>Por favor, digite uma cidade.</p>';
    }
});
