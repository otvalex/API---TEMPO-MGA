document.getElementById('botao').addEventListener('click', function() {
    const estado = document.getElementById('estados').value;
    const cidade = document.getElementById('cidades').value;

    if (!estado || !cidade) {
        document.getElementById('resultado').innerHTML = '<p>Por favor, selecione o estado e uma cidade.</p>';
        return;
    }

    const apiKey = '1034a5421bf9b08db3d70b5e36402491'; // Substitua pela sua chave de API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${estado},BR&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }
            return response.json();
        })
        .then(data => {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `
                <div class="fundo">
                <h2>Previsão para ${data.name}:</h2>
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Condições: ${data.weather[0].description}</p>
                </div>
            `;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('resultado').innerHTML = '<p>Erro ao buscar previsão do tempo.</p>';
        });
});