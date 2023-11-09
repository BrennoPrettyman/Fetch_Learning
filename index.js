function iniciar() {
const botaoCarregar = document.getElementById("carregar")
botaoCarregar.addEventListener('click', carregar)  
}

async function carregar() {
    
    const url = "dados.json"

    const resposta = await fetch(url)
    const dados = await resposta.json ()

   const mensagem = `Estou estudando ${dados.componente} no curso de ${dados.curso} da ${dados.escola}.`
   exibir (mensagem, dados.professores)
}

function exibir(mensagem, professores) {
    const paragrafoMensagem = document.getElementById("mensagem")
    paragrafoMensagem.innerText = mensagem
    
    const listaProfs = document.getElementById("professores");
    for(const prof of professores) {
        listaProfs.insertAdjacentHTML('beforeend', `<li>${prof}</li>`);

    }
}


document.addEventListener('DOMContentLoaded', iniciar);