import Atributos from './atributos.js'

let inputNome = document.getElementById('nome-personagem');
let nomezin = inputNome.value
let spanNome = document.getElementById('nome-escolhido');
let atributosTotal = document.getElementById('pontos-atributos-disponiveis')

const dicioElementos = {
    fo :  [document.getElementById('forç'), 0],
    ve : [document.getElementById('velo'), 0],
    de : [document.getElementById('des'), 0],
    re : [document.getElementById('res'), 0],
    inte : [document.getElementById('int'), 0],
    sa : [document.getElementById('sab'), 0],
    vo : [document.getElementById('von'), 0],
    ca : [document.getElementById('car'), 0],
    influ : [document.getElementById('inf'), 0]
}
Object.values(dicioElementos).forEach((itens) => {
    const inputElemento = itens[0];

    inputElemento.addEventListener('input', (event) =>{
        const valorNumerico = Number(event.target.value);
        
        itens[1] = valorNumerico
    })
})



inputNome.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        let o_nome = inputNome.value;
        spanNome.textContent = o_nome
        
    }
});

let novo = new Atributos(nomezin, 0, 0, 0, 0, 0, 0, 0, 0, 0);



let botao_criar = document.getElementById('btn-criar');
botao_criar.addEventListener('click', function(){ 

});