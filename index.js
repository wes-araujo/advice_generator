const botao = document.querySelector('.botao');
const idConselho = document.querySelector('.titulo');
const descricaoDoConselho = document.querySelector('.frase');

async function pegarConselho() {
    try {
        const url = 'https://api.adviceslip.com/advice';
        const resposta = await fetch(url);
        return await resposta.json();
    } catch(err){
        console.log(err);  
    }
}

async function gerarConselho(){
    const conselho = await pegarConselho();
    idConselho.innerText = `ADVICE #${conselho.slip.id}`;
    descricaoDoConselho.innerText = conselho.slip.advice;
}

gerarConselho();

botao.addEventListener("click", gerarConselho );


