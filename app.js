//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Criando o primeiro array

let amigos = []

//Criando a função

function adicionarAmigo() {
    let pegarnome = document.querySelector("#amigo")//Pega o id do input que queremos. Mais assertivo para pegar o input correto se tiver mais de um
    let nome = pegarnome.value //Pega o valor do input

    if (nome == "") {
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(nome); //Adicona o nome na lista
        atualizarLista(); //Atualiza a lista na tela
        pegarnome.value = ""; //Limpa o input
    }
}

// Função para atualizar a lista exibida na tela
function atualizarLista() {
    let amigoslista = document.querySelector("#listaAmigos"); // Seleciona a lista no HTML
    amigoslista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre a lista de amigos e adiciona cada um na tela
    amigos.forEach((amigo) => {
        let li = document.createElement("li"); // Cria um novo elemento <li>
        li.textContent = amigo; // Define o texto do <li> como o nome do amigo
        amigoslista.appendChild(li); // Adiciona o <li> na lista <ul>
    });
}

function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome antes de sortear.");
        return; // Sai da função se a lista estiver vazia
    }

    // Gera um índice aleatório dentro do tamanho da lista
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome correspondente ao índice sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Atualiza o conteúdo da área de resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}


/* else {
*/
//let nome = document.querySelector("input").value
//console.log(nome)

/*
function adicionarAmigo() {
    console.log(nome)
} */

/*
function adicionarAmigo() {
    if (nome == "sim") {
        alert("Por favor, insira um nome.")
    } else {
        console.log(nome)
    }
} */