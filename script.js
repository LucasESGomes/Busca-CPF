//Função para chamar a API
function buscar() {
    //Pegando os dados do JSON, e tranformando para Array. Corpo é a variável que armazena os valores do array(array = JSON)
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
        var valorObtido = document.getElementById('valor').value;
        var encontrou = false;

        corpo.forEach(pessoa => {
            if(valorObtido == pessoa.cpf) {

                document.getElementById('nome').innerHTML = pessoa.nome;
                document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
                document.getElementById('cpf').innerHTML = pessoa.cpf;
                document.getElementById('telefone').innerHTML = pessoa.telefone;
                document.getElementById('pais').innerHTML = pessoa.pais;
                document.getElementById('erro').innerHTML = "";

                encontrou = true;

            }
        }); if (!encontrou) {
            document.getElementById('erro').innerHTML = "Registro não encontrado";
        }
        console.log(corpo);
    })
}