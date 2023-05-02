function imprimir(){

    let nome = document.getElementById("titul").Value
    let ano = document.getElementById("ano").value
    let dire = document.getElementById("dire").value
    let gene = document.getElementById("gene").value

    let pess1 = document.getElementById("pes1").value
    let pess2 = document.getElementById("pes2").value
    let pess3 = document.getElementById("pes3").value

    let pel1 = document.getElementById("papel1").value
    let pel2 = document.getElementById("papel2").value
    let pel3 = document.getElementById("papel3").value

    const filme = {
        film: nome,
        Lançamento: ano,
        Diretor: dire,
        Gênero: gene,
        elenco:{
            Pessoa1: pess1, 
            Papel1: pel1,
            Pessoa2: pess2, 
            Papel2: pel2,
            Pessoa3: pess3, 
            Papel3: pel3
        },
        mostrar: function(){
            console.log(filme)
            document.getElementById("inform").innerHTML = filme
        }
    } 
}
