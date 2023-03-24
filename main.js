/*Utilize a API abaixo para buscar um json e criar um cartão com as informações de um usuário do Ricky and Morty.
Onde você vê o número um, pode mudar para qualquer número até 800 que vai buscar um personagem diferente.
https://rickandmortyapi.com/api/character/1*/

let idPesquisaPersonagem = 1

function card(){
  idPesquisaPersonagem = Number(document.getElementById("IdPesquisar").value);
  searce()
};

async function searce() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${idPesquisaPersonagem}`)
  const data = await response.json()
  
  document.getElementById('name').innerHTML = data?.name;
  document.getElementById('status').innerHTML = data?.status;
  document.getElementById('species').innerHTML = data?.species;
  document.getElementById("avatar").src = data.image;
  
  if(data?.type != undefined){
    document.getElementById('type').innerHTML = data?.type;
  }

  document.getElementById('origin').innerHTML = data?.origin.name;
  document.getElementById('location').innerHTML = data?.location.name;
  
  if(data?.Male != undefined){
    document.getElementById('Male').innerHTML = data?.Male  
  }

  
};
searce()


