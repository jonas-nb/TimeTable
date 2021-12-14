//mostra a hora na saida

let mostraHora = () =>{
    let mostra = document.querySelector('#horasss');
    let data = new Date();
    mostra.innerHTML = `${data.toLocaleTimeString()}`
}
setInterval(()=>{
    mostraHora()
},500)