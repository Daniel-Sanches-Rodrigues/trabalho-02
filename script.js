
function atualizarContador() {
    const dataLancamento = new Date("2025-07-01T00:00:00");
    const agora = new Date();
    const diferenca = dataLancamento - agora;

    if (diferenca <= 0) {
        document.getElementById("contador").innerText = "LANÇADO!";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contador").innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

const imagens = [
    'fusca1.jpg',
    'fusca2.jpg',
    'fusca3.jpg',
    'fusca4.jpg',
    'fusca5.jpg',
    'fusca6.jpg'
];

let indiceAtual = 0;
const imagemCarrossel = document.getElementById("imagem-carrossel");

document.getElementById("proximo").addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imagemCarrossel.src = imagens[indiceAtual];
});

document.getElementById("anterior").addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    imagemCarrossel.src = imagens[indiceAtual];
});
