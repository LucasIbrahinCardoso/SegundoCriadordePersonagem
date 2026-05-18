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




inputNome.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        let o_nome = inputNome.value;
        spanNome.textContent = o_nome
    }
});

Object.values(dicioElementos).forEach((itens) => {
    const inputElemento = itens[0];

    inputElemento.addEventListener('input', (event) =>{
        const valorNumerico = Number(event.target.value);
        
        itens[1] = valorNumerico
    })
})




let botao_criar = document.getElementById('btn-criar');
botao_criar.addEventListener('click', async function(){ 
    const listaCompleta = {
        fo: dicioElementos.fo[1],
        ve: dicioElementos.ve[1],
        de: dicioElementos.de[1],
        re: dicioElementos.re[1],
        inte: dicioElementos.inte[1],
        sa: dicioElementos.sa[1],
        vo: dicioElementos.vo[1],
        ca: dicioElementos.ca[1],
        influ: dicioElementos.influ[1],
        nomi: inputNome.value
    };
    const personagem = JSON.stringify(listaCompleta)
    try {
        const resposta = await fetch('http://127.0.0.1:8000/salvando/', {
            method: "POST", headers: { "Content-Type" : "application/json"}, body: personagem
        })}
    catch (erro) {
        console.error(erro);
    }
});