
document.addEventListener("DOMContentLoaded", function() {
    // Usando fetch para carregar o conteúdo do menu.html
    fetch('menu.html')
        .then(response => {
            // Verifica se a resposta foi bem-sucedida
            if (!response.ok) {
                throw new Error('Não foi possível carregar o menu: ' + response.statusText);
            }
            return response.text(); // Retorna o conteúdo como texto
        })
        .then(data => {
            // Insere o conteúdo carregado na div com id 'menu'
            document.getElementById('menu').innerHTML = data;
        })
        .catch(error => {
            console.error(error); // Lida com erros de carregamento
        });
});


