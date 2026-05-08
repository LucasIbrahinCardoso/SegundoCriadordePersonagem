var inputNome = document.getElementById('nome-personagem');
var o_nome = inputNome.value
var spanNome = document.getElementById('nome-escolhido');

inputNome.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        spanNome.textContent = o_nome
    }
})

var botao = document.getElementById('btn-criar');
botao.addEventListener('click', function(){ 
    
});