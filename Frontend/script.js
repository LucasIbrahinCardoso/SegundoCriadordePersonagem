var inputNome = document.getElementById('nome-personagem');
var spanNome = document.getElementById('nome-escolhido');
var todos_atributos = getElementById('atributos-container')

inputNome.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        var o_nome = inputNome.value
        spanNome.textContent = o_nome
        
    }
})






var botao_criar = document.getElementById('btn-criar');
botao_criar.addEventListener('click', function(){ 

});