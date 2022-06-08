
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

calcular = () => {
    console.log("calculando");

    let adultos =  inputAdultos.value;
    let criancas = inputCriancas.value;
    var duracao = inputDuracao.value;


    let carneTotal = (qntddCarne(duracao) * adultos) + ((qntddCarne(duracao) / 2) * criancas);
    let cervejaTotal = qntddCerveja(duracao) * adultos;
    let bebidasTotal = (qntddBebidas(duracao) * adultos) + ((qntddBebidas(duracao) / 2) * criancas);

    console.log(carneTotal);
    console.log(cervejaTotal);
    console.log(bebidasTotal);

    resultado.innerHTML = `<p> <strong>${carneTotal/1000}Kg</strong> de carne</p>`;
    resultado.innerHTML += `<p> <strong>${Math.ceil(cervejaTotal/269)} latinhas</strong> de cerveja</p>`;
    resultado.innerHTML += `<p> <strong>${Math.ceil(bebidasTotal/2000)}</strong> refrigerantes de <strong>2L</strong></p>`;
}

function qntddCarne(duracao){
    if(duracao>=6){
        return 650;
    }else{
        return 400;
    }
}
function qntddCerveja(duracao){
    if(duracao>=6){
        return 2000;
    }else{
        return 1200;
    }
}
function qntddBebidas(duracao){
    if(duracao>=6){
        return 1500;
    }else{
        return 1000;
    }
}