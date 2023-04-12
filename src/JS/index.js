const setaAvancar = document.querySelector('.btn-avancar');
const setaVoltar = document.querySelector('.btn-voltar');
const cardsNaruto = document.querySelectorAll('.cartao');
let cardAtual= 0;


setaAvancar.addEventListener('click', ()=>{
   console.log('cardsNaruto',cardsNaruto.length-1);
   console.log('cartoes',cardAtual);

   if(cardAtual === cardsNaruto.length-1)return;

   console.log('Olé!')

   cardAtual++;
   console.log(cardsNaruto[cardAtual].classList.add('selecionado'));
   
   const cartaoEscolhido = document.querySelector('.selecionado');
   cartaoEscolhido.classList.remove('selecionado');
   console.log(cartaoEscolhido);
})


setaVoltar.addEventListener('click', ()=>{
    if(cardAtual === 0) return;
 
 
    const cartaoEscolhido = document.querySelector('.selecionado');
    cartaoEscolhido.classList.remove('selecionado');
    console.log(cartaoEscolhido);
 
 
    cardAtual--;
    console.log(cardAtual);
    cardsNaruto[cardAtual].classList.add("selecionado");
 
 })