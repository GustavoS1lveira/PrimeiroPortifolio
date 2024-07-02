async function fetchPokemon() {
    const pokemonId = document.getElementById('pokemon-id').value;

    if (pokemonId) {
        try {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const pokemon = await resposta.json();

            const pokemonImagem = document.getElementById('pokemon-image');
            pokemonImagem.src = pokemon.sprites.front_default;
            pokemonImagem.style.display = 'block';
            document.getElementById('pokemon-nome').innerText = `Nome: ${pokemon.name}`;
            document.getElementById('pokemon-tipos').innerText = `Tipos: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}`;

            // Conversão para exibir peso em kg
            const pesoEmKg = pokemon.weight / 10; // A API retorna o peso em decaquilogramas (hg), então dividimos por 10 para obter kg
            document.getElementById('pokemon-peso').innerText = `Peso: ${pesoEmKg} kg`;

            // Altura já está em metros na API
            document.getElementById('pokemon-altura').innerText = `Altura: ${pokemon.height / 10} m`;

            if (pokemon.cries && pokemon.cries.latest) {
                const pokemonSom = document.getElementById('pokemon-som');
                pokemonSom.src = pokemon.cries.latest;
                pokemonSom.play();
            } else if (pokemon.cries && pokemon.cries.legacy) {
                const pokemonSom = document.getElementById('pokemon-som');
                pokemonSom.src = pokemon.cries.legacy;
                pokemonSom.play();
            } else {
                console.log('Som não encontrado.');
            }

        } catch (error) {
            console.error('Erro ao buscar informações do Pokémon:', error);
        }
    }
}
