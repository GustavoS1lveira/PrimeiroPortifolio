/**
         * Função assíncrona para buscar e exibir informações de um Pokémon com base no ID fornecido.
         */
async function fetchPokemon() {
    // -- Obter o ID do pokemon pelo Usuario -->

    const pokemonId = document.getElementById('pokemon-id').value;

    // -- Ação para verificar o ID, se é ou não compativel -->
    if (pokemonId) {
        try {
            // -- Procurando na API -->
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            // -- Conversão para JSON -->
            const pokemon = await resposta.json();

            // -- Exibe as informações do Pokémon na página -->
            const pokemonImagem = document.getElementById('pokemon-image');
            pokemonImagem.src = pokemon.sprites.front_default;
            pokemonImagem.style.display = 'block';
            document.getElementById('pokemon-nome').innerText = `Nome: ${pokemon.name}`;
            document.getElementById('pokemon-tipos').innerText = `Tipos: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
            document.getElementById('pokemon-peso').innerText = `Peso: ${pokemon.weight} kg`;
            document.getElementById('pokemon-altura').innerText = `Altura: ${pokemon.height} m`;

            // -- Reproduz o som do Pokémon, se não for encotrado será avisado. -->
            if (pokemon.cries && pokemon.cries.latest) {
                const pokemonSom = document.getElementById('pokemon-som');
                pokemonSom.src = pokemon.cries.latest;
                pokemonSom.play();
            } else if (pokemon.cries && pokemon.cries.legacy) {
                const pokemonSom = document.getElementById('pokemon-som');
                pokemonSom.src = pokemon.cries.legacy;
                pokemonSom.play();
            } else {
                console.log('Não encontrado.');
            }

        } catch (error) {
            // -- Erros de informacoes ou JSON -->
            console.error('Erro ao buscar informações do Pokémon:', error);
        }
    }
}
