function executar(){

    let quant1 = document.getElementById("prod1").value
    let quant2 = document.getElementById("prod2").value
    let quant3 = document.getElementById("prod3").value
    let quant4 = document.getElementById("prod4").value
    let quant5 = document.getElementById("prod5").value

    const produtos = [quant1, quant2, quant3, quant4, quant5]

    let vend1 = document.getElementById("vend1").value
    let vend2 = document.getElementById("vend2").value
    let vend3 = document.getElementById("vend3").value
    let vend4 = document.getElementById("vend4").value
    let vend5 = document.getElementById("vend5").value

    const vendas = [vend1, vend2, vend3, vend4, vend5]

    let res1 = produtos[0] - vendas[0]
    let res2 = produtos[1] - vendas[1]
    let res3 = produtos[2] - vendas[2]
    let res4 = produtos[3] - vendas[3]
    let res5 = produtos[4] - vendas[4]

    const restam = [res1, res2, res3, res4, res5]

    document.getElementById("rest1").innerHTML = restam[0]
    document.getElementById("rest2").innerHTML = restam[1]
    document.getElementById("rest3").innerHTML = restam[2]
    document.getElementById("rest4").innerHTML = restam[3]
    document.getElementById("rest5").innerHTML = restam[4]
}