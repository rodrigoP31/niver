// Ao carregar a página, inicia as animações em sequência
document.addEventListener('DOMContentLoaded', () => {
    const layers = document.querySelectorAll('.layer');
    // Exibe cada camada do bolo a cada 1,5 segundo
    layers.forEach((layer, index) => {
        setTimeout(() => {
            layer.classList.add('visible');
        }, index * 1500);
    });
    // Após as camadas, exibe as velas
    setTimeout(() => {
        document.querySelector('.candles').classList.add('visible');
    }, layers.length * 1500);
    // Por fim, exibe o texto animado
    setTimeout(() => {
        document.querySelector('.title').classList.add('visible');
    }, (layers.length + 1) * 1000);

    // Exibe o título depois de 3 segundos (ajuste conforme sua animação do bolo)
    setTimeout(() => {
        document.querySelector('.title').classList.add('show');
    }, 3000);

    // Adiciona o evento de clique para a animação de "parabéns"
    document.querySelector('.candles').addEventListener('click', () => {
        const title = document.querySelector('.title');
        title.classList.add('celebrate');
        setTimeout(() => {
            title.classList.remove('celebrate');
            title.classList.add('persistent'); // Classe para manter visível
        }, 1000);
    });
});