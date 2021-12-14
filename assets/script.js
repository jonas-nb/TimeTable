//seleção dos elementos a serem escritos
const tables1 = document.querySelector("#tables1");
const tables2 = document.querySelector("#tables2");
const tables3 = document.querySelector("#tables3");
const tables4 = document.querySelector("#tables4");
const relogio = document.querySelector("#relogio")
const aula = document.querySelector("#aula")

//seleção dos containeres
let container1 = document.querySelector("#tables1-container");
let container2 = document.querySelector("#tables2-container");
let container3 = document.querySelector("#tables3-container");
let container4 = document.querySelector("#tables4-container");



//criação de uma const para hora
const data = new Date();

// função que mostra os horarios
function mostra(){
   
    

    let horario = data.getDay();
    if( horario === 0 ){
        aula.innerHTML = "Revisão Geral"
        relogio.innerHTML = "Domingo";
    } else if( horario === 1 ){
        tables1.innerHTML = "JS";
        container1.style.backgroundColor = "#EFD81D"
        tables2.innerHTML = "CSS";
        container2.style.backgroundColor = "#0F88BC"
        relogio.innerHTML = "Segunda";
    } else if( horario === 2 ){
        tables1.innerHTML = "HTML 5";
        container1.style.backgroundColor = "#E96227"
        tables2.innerHTML = "JS";
        container2.style.backgroundColor = "#EFD81D"
        relogio.innerHTML = "Terça";
    } else if( horario === 3 ){
        tables1.innerHTML = "JS";
        container1.style.backgroundColor = "#EFD81D"
        tables2.innerHTML = "ING";
        container2.style.backgroundColor = "#000000"
        relogio.innerHTML = "Quarta";
    } else if( horario === 4 ){
        tables1.innerHTML = "Css3";
        container1.style.backgroundColor = "#0F88BC"
        tables2.innerHTML = "JS";
        container2.style.backgroundColor = "#EFD81D"
        relogio.innerHTML = "Quinta";
    } else if( horario === 5 ){
        tables1.innerHTML = "ING";
        container1.style.backgroundColor = "#000000"
        tables2.innerHTML = "JS";
        container2.style.backgroundColor = "#EFD81D"
        relogio.innerHTML = "Sexta";
    } else if( horario === 6 ){
        tables1.innerHTML = "JS";
        container1.style.backgroundColor = "#EFD81D"
        tables2.innerHTML = "HTML 5";
        container2.style.backgroundColor = "#E96227"
        relogio.innerHTML = "Sábado";
    }

    
}
mostra()

