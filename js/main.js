// Código JavaScript simples, sem frameworks. O botão abre/fecha a navegação no celular.
// Menu responsivo: controla a navegacao e atualiza aria-expanded.
const botao = document.querySelector('.menu-button');
const navegacao = document.querySelector('nav');
if (botao && navegacao) {
  botao.addEventListener('click', () => {
    const aberto = navegacao.classList.toggle('open');
    botao.setAttribute('aria-expanded', String(aberto));
  });
  navegacao.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navegacao.classList.remove('open');
    botao.setAttribute('aria-expanded', 'false');
  }));
}
