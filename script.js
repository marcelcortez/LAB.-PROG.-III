var selecionaContato = null;

function adicionar(){
    var dadosInput = capturaDados();
    if(selecionaContato == null){
        insereContato(dadosInput);
    }else{
        atualizar(dadosInput);
    }
    LimpaFormulario();
    /*alert(`Nome: ${dadosInput.nome}\nE-mail: ${dadosInput.email}\nWhatsApp: ${dadosInput.whatsapp}\nInstagram: ${dadosInput.instagram}`);*/
}

function capturaDados() {
    var dadosInput = {};
    dadosInput["nome"] = document.getElementById("nome").value;
    dadosInput["email"] = document.getElementById("email").value;
    dadosInput["whatsapp"] = document.getElementById("whatsapp").value;
    dadosInput["instagram"] = document.getElementById("instagram").value;
    return dadosInput;
}

function LimpaFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("whatsapp").value = "";
    document.getElementById("instagram").value = "";
}

function insereContato(dadosInput) {
    var tabela = document.getElementById("listaContatos").getElementsByTagName('tbody')[0];
    var novoContato = tabela.insertRow(tabela.length);

    celula1 = novoContato.insertCell(0);
    celula1.innerHTML = dadosInput.nome;

    celula2 = novoContato.insertCell(1);
    celula2.innerHTML = dadosInput.email;

    celula3 = novoContato.insertCell(2);
    celula3.innerHTML = dadosInput.whatsapp;

    celula4 = novoContato.insertCell(3);
    celula4.innerHTML = dadosInput.instagram;

    celula4 = novoContato.insertCell(4);
    celula4.innerHTML = `<button id="b1" onClick="editar(this)">Editar</button> <button id="b2" onClick="deletar(this)">Deletar</button>`;    
}

function editar(contatoDados) {
    selecionaContato = contatoDados.parentElement.parentElement;
    document.getElementById("nome").value = selecionaContato.cells[0].innerHTML;
    document.getElementById("email").value = selecionaContato.cells[1].innerHTML;
    document.getElementById("whatsapp").value = selecionaContato.cells[2].innerHTML;
    document.getElementById("instagram").value = selecionaContato.cells[3].innerHTML;
}

function atualizar(contatoDados) {
    selecionaContato.cells[0].innerHTML = contatoDados.nome;
    selecionaContato.cells[1].innerHTML = contatoDados.email;
    selecionaContato.cells[2].innerHTML = contatoDados.whatsapp;
    selecionaContato.cells[3].innerHTML = contatoDados.instagram;
}

function deletar(contatoDados){
    if (confirm('O contato será deletado')) {
        row = contatoDados.parentElement.parentElement;
        document.getElementById("listaContatos").deleteRow(row.rowIndex);
        LimpaFormulario();
    }
}