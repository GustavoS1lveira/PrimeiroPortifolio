/**
 * FUnção que configura um botão de alternância de reprodução para um banner.
 * Ao clicar no botão, alterna entre pausar e reproduzir a troca automática de banners.
 */

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão de alternância de reprodução
    // Controlar o estado de pausa/reprodução
    var toggleButton = document.querySelector('.toggle-play');
    var isPaused = false;

    // Adiciona um ouvinte de evento de clique ao botão de alternância
    toggleButton.addEventListener('click', function() {
        isPaused = !isPaused;
        if (isPaused) {
            toggleButton.classList.remove('play');
        } else {
            toggleButton.classList.add('play');
        }
    });
});

// Array de URLs dos banners
var banners = ["./img/destaque-home.png", "./img/destaque-home-2.png"];
var bannerAtual = 0;
var timer;

/**
 * Função para trocar o banner atual exibido na página.
 * Incrementa o índice do banner e atualiza a imagem do banner na página.
 */
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    // Atualiza a src da imagem do banner com a URL do próximo banner
    document.querySelector('.destaque .banner-img').src = banners[bannerAtual];
}
// Define um temporizador para chamar a função trocaBanner a cada segundo
timer = setInterval(trocaBanner, 1000);

// Seleciona o botão de alternância de reprodução
var toggleButton = document.querySelector('.toggle-play');

/** Define uma função para alternar entre pausar e reproduzir a 
troca automática de banners ao clicar no botão 
*/

toggleButton.onclick = function() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    } else {
        timer = setInterval(trocaBanner, 1000);
    }
    return true;
};